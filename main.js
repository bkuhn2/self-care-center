var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var receiveButton = document.querySelector('#receive-button');
var viewAllButton = document.querySelector('#view-all-messages')
var homeButton = document.querySelector('#go-home')
var createButton = document.querySelector('#create-new')

var userChoice = document.querySelector('#message-type-selector')
var userText = document.querySelector('#user-text-input')
var affirmationsList = document.querySelector('#affirmations-list')
var mantrasList = document.querySelector('#mantras-list')

var mainMessageText = document.querySelector('#message-text');
var defaultImg = document.querySelector('.default-pic');

var mainPage = document.querySelector('#Main-Page');
var messagesPage = document.querySelector('#Messages-Page')

affirmationButton.addEventListener('click', checkAffirmation)
mantraButton.addEventListener('click', checkMantra)
receiveButton.addEventListener('click', receiveMessage)
viewAllButton.addEventListener('click', viewAllMessages)
homeButton.addEventListener('click', goHome)
createButton.addEventListener('click', createNew)


function makeRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function makeID(number) {
  return Math.floor(Math.random() * number);
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
  loadMessagesPage();
}

function goHome() {
  mainPage.classList.remove('hidden')
  messagesPage.classList.add('hidden')
}

function loadMessagesPage() {
  affirmationsList.innerHTML = '';
  mantrasList.innerHTML = '';

  for (var i = 0; i < affirmations.length; i++){
    affirmationsList.innerHTML += `
      <section id="${makeID(10000)}" class="displayed-message">
      <p id="displayed-message-text">${affirmations[i]}</p>
      </section>
    `
  }

  for (var i = 0; i < mantras.length; i++) {
    mantrasList.innerHTML += `
      <section id="${makeID(10000)}" class="displayed-message">
      <p id="displayed-message-text">${mantras[i]}</p>
      </section>
    `
  }
}

function createNew() {
  if (userChoice.value === 'affirmation') {
    affirmations.unshift(userText.value)
  } else if (userChoice.value === 'mantra') {
    mantras.unshift(userText.value)
  }
  loadMessagesPage();
}
