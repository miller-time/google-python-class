const navMenu = document.getElementById('nav');
const navMenuLinks = navMenu.getElementsByTagName('a');
const page = document.getElementById('page');

function activeNav() {
  return document.querySelector('a.is-active');
}

function activate(navItem) {
  activeNav().classList.remove('is-active');
  navItem.classList.add('is-active');

  const content = document.getElementById(navItem.dataset.page);
  page.innerHTML = content.innerHTML;
}

for (let i = 0; i < navMenuLinks.length; i++) {
  const navMenuLink = navMenuLinks[i];
  navMenuLink.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    activate(navMenuLink);
  });
}

activate(activeNav());
