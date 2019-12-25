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
    if (!section.section) return
    section.link.addEventListener('click', event => {
      event.preventDefault();
      autoScroll(section.section, 400, 'easeInOutQuad');
    });
  });
}

// highlighting the links when scrolling to different parts of the page
function setupScrollDetect() {
  window.addEventListener('scroll', e => {
    let found = false;
    for (let i = sections.length - 1; i >= 0; i--) {
      const currentLink = sections[i].link;
      if (found) {
        currentLink.classList.remove('current');
        continue;
      }

      const scrollPos = window.scrollY;
      const currentEl = sections[i].section;
      const prevSection = sections[i + 1];
      const prevEl = prevSection && prevSection.section;
      const scrolledTo = scrollPos >= currentEl.offsetTop;
      const lastElementBottomOfPage = i == sections.length - 1 &&
        (window.innerHeight + window.scrollY) >= document.body.offsetHeight 
      if (scrolledTo || lastElementBottomOfPage) {
        currentLink.classList.add('current');
        found = true;
      } else {
        currentLink.classList.remove('current');
      }
    }
  });
}
