import 'bootstrap/js/dist/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './style.scss';
import './modules/top/top.scss';
import './modules/wireless/wireless.scss';
import './modules/surfaces/surfaces.scss';
import './modules/surfaces/components/carousel/carousel.scss';
import './modules/devices/devices.scss';
import './modules/features/features.scss';
import './modules/features/components/carousel/carousel.scss';
import './modules/features/components/software/software.scss';
import './modules/advantages/advantages.scss';
import './modules/footer/footer.scss';

const menuToggle = document.querySelector('.top-header__button_open');
const menuClose = document.querySelector('.top-header__button_close');
const mobileNavigation = document.querySelector('.top-navigator-slide__container');

function setMenuOpen(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileNavigation.classList.toggle('is-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';

  if (isOpen) {
    mobileNavigation.querySelector('a')?.focus();
  }
}

menuToggle.addEventListener('click', () => setMenuOpen(true));
menuClose.addEventListener('click', () => {
  setMenuOpen(false);
  menuToggle.focus();
});

mobileNavigation.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
    menuToggle.focus();
    return;
  }

  if (event.key === 'Tab') {
    const focusableElements = mobileNavigation.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
});

mobileNavigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});
