/* Creighton Volleyball — theme toggle
   Theme is set inline in <head> before paint (see HTML).
   This file only handles the toggle button. */

(function () {
  var KEY = 'cu-vb-theme';

  function attachToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachToggle);
  } else {
    attachToggle();
  }
})();
