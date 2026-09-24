(function () {
  'use strict';
  var burger = document.getElementById('burger');
  var panel = document.getElementById('mobile-panel');
  if (!burger || !panel) return;
  function setMenu(open) {
    panel.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function () { setMenu(panel.hidden); });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { setMenu(false); burger.focus(); }
  });
})();
