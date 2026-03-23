const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
toggle?.addEventListener('click', () => {
  menu?.classList.toggle('hidden');
  iconOpen?.classList.toggle('hidden');
  iconClose?.classList.toggle('hidden');
});
