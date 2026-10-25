export function mountTravelIndex(doc = document, view = window) {
  const index = doc.querySelector('.travel-index');
  const select = doc.getElementById('travel-place-select');
  const places = [...doc.querySelectorAll('[data-travel-place]')];
  if (!index || !select || !places.length) return;

  let current = '';
  const applyCurrent = () => {
    index.querySelectorAll('a[href^="#"]').forEach((link) => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    select.value = current;
  };

  select.addEventListener('change', () => {
    const target = doc.getElementById(select.value);
    if (!target?.hasAttribute('data-travel-place')) return;
    current = target.id;
    applyCurrent();
    target.scrollIntoView({ block: 'start', behavior: 'auto' });
    const heading = target.querySelector('h2') || target;
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
    view.history.replaceState(null, '', `#${current}`);
  });

  if ('IntersectionObserver' in view) {
    const visible = new Set();
    const observer = new view.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      const place = [...visible].sort((a, b) => Math.abs(a.getBoundingClientRect().top - 152) - Math.abs(b.getBoundingClientRect().top - 152))[0];
      if (place && place.id !== current) {
        current = place.id;
        applyCurrent();
      }
    }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 });
    places.forEach((place) => observer.observe(place));
  }

  if ('MutationObserver' in view) {
    new view.MutationObserver(applyCurrent).observe(doc.documentElement, {
      attributes: true, attributeFilter: ['lang'],
    });
  }
  index.classList.add('is-ready');
}

if (typeof document !== 'undefined') mountTravelIndex();
