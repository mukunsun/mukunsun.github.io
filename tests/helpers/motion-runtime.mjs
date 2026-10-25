import vm from 'node:vm';

// Count real motion-handler work without relying on wall-clock timing in Node.
export function mountMotion(source, { mobile = false } = {}) {
  const listeners = new Map();
  const frames = new Map();
  const counts = { heightReads: 0, progressWrites: 0 };
  let frameId = 0;
  let progressValue = '';
  const classList = () => {
    const values = new Set();
    return {
      add: (...names) => names.forEach((name) => values.add(name)),
      remove: (...names) => names.forEach((name) => values.delete(name)),
      contains: (name) => values.has(name),
      toggle(name, force = !values.has(name)) {
        if (force) values.add(name);
        else values.delete(name);
        return force;
      },
    };
  };
  const style = () => ({ setProperty() {}, removeProperty() {} });
  const progress = { style: {
    get transform() { return progressValue; },
    set transform(value) { progressValue = value; counts.progressWrites++; },
  } };
  const nav = { classList: classList() };
  const hero = { classList: classList() };
  const spot = { classList: classList(), style: style() };
  const root = {
    classList: classList(),
    scrollTop: 0,
    get scrollHeight() { counts.heightReads++; return 4000; },
  };
  const window = {
    innerHeight: 800,
    pageYOffset: 0,
    scrollY: 0,
    matchMedia(query) {
      return {
        matches: query.includes('max-width') ? mobile : query.includes('pointer: fine') ? !mobile : false,
        addEventListener() {},
      };
    },
    addEventListener(name, callback) {
      if (!listeners.has(name)) listeners.set(name, new Set());
      listeners.get(name).add(callback);
    },
    removeEventListener(name, callback) { listeners.get(name)?.delete(callback); },
    requestAnimationFrame(callback) { frames.set(++frameId, callback); return frameId; },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  const document = {
    documentElement: root,
    readyState: 'complete',
    getElementById(id) { return id === 'progress' ? progress : id === 'top' ? hero : nav; },
    querySelector(selector) {
      if (selector === '.spot') return spot;
      if (selector === '.progress') return progress;
      if (selector === '.detail-nav, .nav') return nav;
      return null;
    },
    querySelectorAll() { return []; },
    addEventListener() {},
  };
  const context = {
    document, window, innerWidth: mobile ? 375 : 1440, innerHeight: 800,
    requestAnimationFrame: window.requestAnimationFrame,
    cancelAnimationFrame: window.cancelAnimationFrame,
  };
  const code = source.includes('<script')
    ? [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].find((match) => match[1].includes('function onScroll'))?.[1]
    : source.replace(/^import .*;\r?\n/gm, '').replace(/^export /gm, '');
  if (!code) throw new Error('No motion implementation found');
  vm.runInNewContext(code, context);

  const flush = () => {
    let rounds = 0;
    while (frames.size) {
      if (++rounds > 240) throw new Error('Motion continues scheduling frames after it should settle');
      const pending = [...frames.values()];
      frames.clear();
      pending.forEach((callback) => callback());
    }
    return rounds;
  };
  flush();
  return {
    counts, nav,
    get transform() { return progressValue; },
    reset() { counts.heightReads = 0; counts.progressWrites = 0; },
    scroll(events = 100, y = 800) {
      window.scrollY = window.pageYOffset = root.scrollTop = y;
      for (let i = 0; i < events; i++) listeners.get('scroll')?.forEach((callback) => callback());
    },
    pointer(x, y) { listeners.get('pointermove')?.forEach((callback) => callback({ clientX: x, clientY: y })); },
    flush,
  };
}
