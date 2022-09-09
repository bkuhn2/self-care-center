var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var receiveButton = document.querySelector('#receive-button');

var defaultImg = document.querySelector('.default-pic');

affirmationButton.addEventListener('click', uncheckMantra)
mantraButton.addEventListener('click', uncheckAffirmation)
receiveButton.addEventListener('click', receiveMessage)

function uncheckMantra() {
  mantraButton.checked = false;
}

function uncheckAffirmation() {
  affirmationButton.checked = false;
}

function receiveMessage() {
  if (affirmationButton.checked === true) {
    defaultImg.classList.add('hidden');

  } else if (mantraButton.check === true) {
    defaultImg.classList.add('hidden');

  }
}
