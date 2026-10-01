// Delegation keeps navigation working when language changes replace link markup.
export function mountCompactNavigation(doc = document) {
  const menus = () => [...doc.querySelectorAll('.compact-nav')];
  doc.addEventListener('click', (event) => {
    const link = event.target.closest?.('.compact-nav a');
    if (link) {
      const menu = link.closest('.compact-nav');
      menu.open = false;
      const destination = new URL(link.href, doc.location.href);
      if (destination.origin === doc.location.origin && destination.pathname === doc.location.pathname && destination.hash) {
        const target = doc.getElementById(decodeURIComponent(destination.hash.slice(1)));
        if (target) {
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
      return;
    }
    menus().forEach((menu) => { if (!menu.contains(event.target)) menu.open = false; });
  });
  doc.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openMenu = menus().find((menu) => menu.open);
    if (!openMenu) return;
    openMenu.open = false;
    openMenu.querySelector('summary')?.focus();
  });
}

if (typeof document !== 'undefined') mountCompactNavigation();
