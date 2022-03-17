const navMenu = document.getElementById('nav');
const navMenuLinks = navMenu.getElementsByTagName('a');
const page = document.getElementById('page');

function activeNav() {
  return document.querySelector('a.is-active');
}

// after setting the view element's innerHTML
// if there are any script tags then we need to use createElement
// to get a clone of the script tag that will actually execute the script
function executeScripts() {
  const scriptElements = page.querySelectorAll('script');
  for (let i = 0; i < scriptElements.length; i++) {
    const scriptElement = scriptElements[i];
    const cloned = document.createElement('script');
    for (let j = 0; j < scriptElement.attributes.length; j++) {
      const attr = scriptElement.attributes[j];
      cloned.setAttribute(attr.name, attr.value);
    }
    cloned.text = scriptElement.text;
    scriptElement.parentNode.replaceChild(cloned, scriptElement);
  }
}

function activate(navItem) {
  activeNav().classList.remove('is-active');
  navItem.classList.add('is-active');

  const pageId = navItem.dataset.page;
  const content = document.getElementById(pageId);
  page.innerHTML = content.innerHTML;
  executeScripts();

  // store page id in local storage to preserve active page between refreshes
  localStorage.setItem('activePageId', pageId);
}

for (let i = 0; i < navMenuLinks.length; i++) {
  const navMenuLink = navMenuLinks[i];
  navMenuLink.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    activate(navMenuLink);
  });
}

(() => {
  // preserve active page between refreshes
  // load page id from local storage if it exists
  const activePageId = localStorage.getItem('activePageId');
  let pageActivated = false;
  if (activePageId) {
    for (let i = 0; i < navMenuLinks.length; i++) {
      const navMenuLink = navMenuLinks[i];
      if (navMenuLink.dataset.page === activePageId) {
        activate(navMenuLink);
        pageActivated = true;
      }
    }
  }

  // if no page id has been stored, load the default view
  if (!pageActivated) {
    activate(activeNav());
  }
})();
