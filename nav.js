const navMenu = document.getElementById('nav');
const navMenuLinks = navMenu.getElementsByTagName('a');
const page = document.getElementById('page');

const routes = {
  'Overview': 'overview',
  'Python Setup': 'setup',
  'Strings': 'strings',
  'String Exercises': 'string-exercises'
};

function activeNav() {
  return document.querySelector('a.is-active');
}

function activate(navItem) {
  activeNav().classList.remove('is-active');
  navItem.classList.add('is-active');

  const navText = navItem.textContent.trim();
  const content = document.getElementById(routes[navText]);
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
