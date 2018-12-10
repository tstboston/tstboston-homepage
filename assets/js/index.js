window.addEventListener('load', init);

function init() {
  setupAutoScroll();
}

function setupAutoScroll() {
  ['about', 'contact', 'join'].forEach(section => {
    const link = document.querySelector(`#${section}-link`);
		const dest = document.querySelector(`#${section}`);
    link.addEventListener('click', event => {
      event.preventDefault();
      autoScroll(dest, 400, 'easeInQuad');
    });
  });
}
