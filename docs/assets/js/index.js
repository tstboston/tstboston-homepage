window.addEventListener('load', init);
let sections = [];

function init() {
  sections = ['about',  'join', 'contact'].map(section => {
    return {
      section: document.querySelector(`#${section}`),
      link: document.querySelector(`#${section}-link`)
    }
  });
  setupAutoScroll();
  setupScrollDetect();
}

function setupAutoScroll() {
  sections.forEach(section => {
    section.link.addEventListener('click', event => {
      event.preventDefault();
      autoScroll(section.section, 400, 'easeInQuad');
    });
  });
}

function setupScrollDetect() {
  window.addEventListener('scroll', e => {
    for(let i = 0; i < sections.length; i++) {
      const scrollPos = window.scrollY;
      const currentEl = sections[i].section;
      const currentLink = sections[i].link;
      const nextSection = sections[i + 1];
      const nextEl = nextSection && nextSection.section;
      console.log(scrollPos, currentEl.offsetTop);
      if(
        scrollPos >= currentEl.offsetTop &&
        (!nextEl || scrollPos < nextEl.offsetTop)
      ) {
        currentLink.classList.add('current');
      } else {
        currentLink.classList.remove('current');
      }
    }
  });
}
