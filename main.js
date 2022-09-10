var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var receiveButton = document.querySelector('#receive-button');
var viewAllButton = document.querySelector('#view-all-messages')
var homeButton = document.querySelector('#go-home')
var createButton = document.querySelector('#create-new')

var mainMessageText = document.querySelector('#message-text');
var defaultImg = document.querySelector('.default-pic');

var mainPage = document.querySelector('#Main-Page');
var messagesPage = document.querySelector('#Messages-Page')

affirmationButton.addEventListener('click', checkAffirmation)
mantraButton.addEventListener('click', checkMantra)
receiveButton.addEventListener('click', receiveMessage)
viewAllButton.addEventListener('click', viewAllMessages)


function makeRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function checkAffirmation() {
  mantraButton.checked = false;
  }

function checkMantra() {
  affirmationButton.checked = false;
}

function receiveMessage() {
  if (affirmationButton.checked === true) {
    defaultImg.classList.add('hidden');
    mainMessageText.innerText = ''
    mainMessageText.innerText = affirmations[makeRandomNumber(affirmations)];
  } else if (mantraButton.checked === true) {
    defaultImg.classList.add('hidden');
    mainMessageText.innerText = '';
    mainMessageText.innerText = mantras[makeRandomNumber(mantras)];
  } else {
    defaultImg.classList.toggle('shake');
  }
}

function viewAllMessages() {
  mainPage.classList.add('hidden')
  messagesPage.classList.remove('hidden')
}
