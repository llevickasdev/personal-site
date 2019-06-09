var elementID = 'particles-js';
var configPath = '/js/particlesjs-config.json';

window.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById(elementID)) {
    particlesJS.load(elementID, configPath);
  }
});
