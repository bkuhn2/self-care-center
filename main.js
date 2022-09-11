var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var receiveButton = document.querySelector('#receive-button');
var viewAllButton = document.querySelector('#view-all-messages')
var homeButton = document.querySelector('#go-home')
var createButton = document.querySelector('#create-new')
var deleteButtons

var messagesPage = document.querySelector('#Messages-Page')
var userChoice = document.querySelector('#message-type-selector')
var userText = document.querySelector('#user-text-input')
var affirmationsList = document.querySelector('#affirmations-list')
var mantrasList = document.querySelector('#mantras-list')

var mainPage = document.querySelector('#Main-Page');
var mainMessageText = document.querySelector('#message-text');
var defaultImg = document.querySelector('.default-pic');


window.addEventListener('load', loadMessages)
affirmationButton.addEventListener('click', checkAffirmation)
mantraButton.addEventListener('click', checkMantra)
receiveButton.addEventListener('click', receiveMessage)
viewAllButton.addEventListener('click', viewAllMessages)
homeButton.addEventListener('click', goHome)
createButton.addEventListener('click', createNewMessage)
affirmationsList.addEventListener('dblclick', editAffirmationMessage)
mantrasList.addEventListener('dblclick', editMantraMessage)


function makeRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function makeID(number) {
  return Math.floor(Math.random() * number);
} // even need now???

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
  loadMessages();
}

function goHome() {
  mainPage.classList.remove('hidden')
  messagesPage.classList.add('hidden')
}

function loadMessages() {
  affirmationsList.innerHTML = '';
  mantrasList.innerHTML = '';
  for (var i = 0; i < affirmations.length; i++){
    affirmationsList.innerHTML += `
      <section id="${affirmations[i]}" class="displayed-message">
      <p id="displayed-message-text">${affirmations[i]}</p>
      <input class="invisible" id="edit-input" type="text">
      <button class="invisible" type="button" id="edit-button">apply</button>
      <button type="button" id="delete-button">&#128465;</button>
      </section>
    `
  }
  for (var i = 0; i < mantras.length; i++) {
    mantrasList.innerHTML += `
      <section id="${mantras[i]}" class="displayed-message">
      <p id="displayed-message-text">${mantras[i]}</p>
      <input class="invisible" id="edit-input" type="text">
      <button class="invisible" type="button" id="edit-button">apply</button>
      <button type="button" id="delete-button">&#128465;</button>
      </section>
    `
  }
  deleteButtons = document.querySelectorAll('#delete-button');
  deleteButtons.forEach(function (i) {
    i.addEventListener('click', deleteMessage)
  })
}

function deleteMessage() {
  var messageToDelete = event.target.parentElement;

  for (var i = 0; i < affirmations.length; i++) {
    if (messageToDelete.id === affirmations[i]) {
      affirmations.splice(i, 1);
      messageToDelete.remove()
    }
  }

  for (var i = 0; i < mantras.length; i++) {
    if (messageToDelete.id === mantras[i]) {
      mantras.splice(i, 1);
      messageToDelete.remove()
    }
  }
}

function createNewMessage() {
  if (userChoice.value === 'affirmation') {
    affirmations.unshift(userText.value)
  } else if (userChoice.value === 'mantra') {
    mantras.unshift(userText.value)
  }
  loadMessages();
}

function editAffirmationMessage() {
  var target = event.target.parentElement
  var text = target.querySelector('#displayed-message-text')
  var editInput = target.querySelector('#edit-input')
  var editButton = target.querySelector('#edit-button')
  for (var i = 0; i < affirmations.length; i++) {
    if (text.innerText === affirmations[i]) {
      var indexPosition = i;
    }
  }
  editInput.classList.remove('invisible')
  editButton.classList.remove('invisible')
  editInput.value = text.innerText

  editButton.addEventListener('click', applyEdits)
  function applyEdits(){
    affirmations.splice(indexPosition, 1, editInput.value)
    loadMessages();
  }
}

function editMantraMessage() {
  var target = event.target.parentElement
  var text = target.querySelector('#displayed-message-text')
  var editInput = target.querySelector('#edit-input')
  var editButton = target.querySelector('#edit-button')
  for (var i = 0; i < mantras.length; i++) {
    if (text.innerText === mantras[i]) {
      var indexPosition = i;
    }
  }
  editInput.classList.remove('invisible')
  editButton.classList.remove('invisible')
  editInput.value = text.innerText

  editButton.addEventListener('click', applyEdits)
  function applyEdits(){
    mantras.splice(indexPosition, 1, editInput.value)
    loadMessages();
  }
}
