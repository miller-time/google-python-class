(() => {
  const hints = document.getElementById('hints');
  const showHintButtons = hints.getElementsByTagName('button');

  for (let i = 0; i < showHintButtons.length; i++) {
    const showHintButton = showHintButtons[i];
    showHintButton.addEventListener('click', () => {
      showHintButton.classList.add('is-hidden');
      document.getElementById(showHintButton.dataset.hint).classList.remove('is-hidden');
    });
  }
})();
