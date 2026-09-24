// Run from any directory: node scripts/check-site.js
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const files = fs.readdirSync(root).filter((name) => name.endsWith('.html'));
const scriptFiles = ['components.js', 'translations.js', 'main.js'];
for (const name of scriptFiles) {
  new vm.Script(read(`assets/js/${name}`), { filename: name });
}

function createContext(page) {
  const registry = new Map();
  const context = vm.createContext({
    HTMLElement: class {},
    customElements: { define: (name, type) => registry.set(name, type) },
    document: {
      body: { dataset: { page } },
      documentElement: {},
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: () => {}
    },
    window: { addEventListener: () => {} },
    localStorage: { getItem: () => null, setItem: () => {} },
    navigator: { language: 'nl' }
  });
  for (const name of scriptFiles) vm.runInContext(read(`assets/js/${name}`), context);
  assert.equal(context.document.documentElement.lang, 'nl');
  vm.runInContext('setLanguage("en")', context);
  assert.equal(context.document.documentElement.lang, 'en');
  assert.ok(context.document.title, `Missing page title: ${page}`);
  return { context, registry };
}

const pages = new Map();
const usedImages = new Set();
for (const file of files) {
  let html = read(file);
  const page = html.match(/data-page="([^"]+)"/)[1];
  const { context, registry } = createContext(page);
  const scripts = [...html.matchAll(/<script src="([^"]+)" defer><\/script>/g)].map((m) => m[1]);
  assert.deepEqual(scripts, scriptFiles.map((name) => `assets/js/${name}`), `Script order: ${file}`);
  for (const [tag, Type] of registry) {
    const component = new Type();
    component.querySelector = () => ({});
    component.connectedCallback();
    html = html.replaceAll(`<${tag}></${tag}>`, component.innerHTML);
  }
  const translations = vm.runInContext('translations', context);
  for (const match of html.matchAll(/data-i18n(?:-aria-label)?="([^"]+)"/g)) {
    for (const language of ['nl', 'en']) {
      assert.ok(match[1] in translations[language], `${file}: missing ${language}.${match[1]}`);
    }
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate id: ${file}`);
  pages.set(file, { html, ids: new Set(ids) });
}

for (const [file, { html }] of pages) {
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1], `https://local.invalid/${file}`);
    if (url.origin !== 'https://local.invalid') continue;
    const target = decodeURIComponent(url.pathname.slice(1));
    assert.ok(fs.existsSync(path.join(root, target)), `${file}: missing ${target}`);
    if (target.startsWith('assets/images/')) usedImages.add(target);
    if (url.hash && pages.has(target)) {
      assert.ok(pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1))), `${file}: broken ${match[1]}`);
    }
  }
}

function walk(directory) {
  return fs.readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const relative = `${directory}/${entry.name}`;
    return entry.isDirectory() ? walk(relative) : [relative];
  });
}

// Include images referenced from CSS, relative to the stylesheet itself.
for (const match of read('assets/css/style.css').matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) {
  const url = new URL(match[1], 'https://local.invalid/assets/css/style.css');
  if (url.origin !== 'https://local.invalid') continue;
  const target = decodeURIComponent(url.pathname.slice(1));
  assert.ok(fs.existsSync(path.join(root, target)), `CSS: missing ${target}`);
  if (target.startsWith('assets/images/')) usedImages.add(target);
}
const unused = walk('assets/images').filter((file) => !usedImages.has(file));
assert.deepEqual(unused, [], 'Unused images');
console.log(`OK: ${pages.size} pages, ${usedImages.size} images, local links, anchors, both languages and script loading.`);
