import { initMenu } from './menu.js';
import { initStickyHeader, initSmoothScroll } from './scroll.js';
import { initReveal } from './reveal.js';
import { initForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initStickyHeader();
  initSmoothScroll();
  initReveal();
  initForm();
});