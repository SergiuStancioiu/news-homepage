const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

openMenuButton.addEventListener('click', () => {
  mobileMenuOverlay.classList.add('show-mobile-menu');
  document.body.classList.add('hide-sidebar');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenuOverlay.classList.remove('show-mobile-menu');
  document.body.classList.remove('hide-sidebar');
});
