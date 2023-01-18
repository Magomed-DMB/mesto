const popupProfileOpen = document.querySelector('.popup_profile');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupElementOpen = document.querySelector('.popup_element');
const buttonElementAdd = document.querySelector('.profile__add-button');
const buttonClose = document.querySelectorAll('.popup__close-button');

let formProfile = document.querySelector('#popup__form-profile');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

function openProfilePopup(e) {
  e.preventDefault();
  openPopup(popupProfileOpen);
};
function openElementPopup(e) {
  e.preventDefault();
  openPopup(popupElementOpen);
};

function closeProfilePopup(evt) {
  evt.preventDefault();
  closePopup(popupProfileOpen);
};

function closeElementPopup(evt) {
  evt.preventDefault();
  closePopup(popupElementOpen);
};

buttonProfileEdit.addEventListener('click', openProfilePopup);
buttonElementAdd.addEventListener('click', openElementPopup);

buttonClose.forEach((button) => {
  button.addEventListener('click', () => {
    const currentPopup = button.closest('.popup');
    closePopup(currentPopup);
  });
});

function handleFormSubmit (event) {
  event.preventDefault();
  let nameInput = document.querySelector('.popup__input_type_name');
  let jobInput = document.querySelector('.popup__input_type_text');
  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeProfilePopup(event);
}

formProfile.addEventListener('submit', handleFormSubmit);

////////////////////
/////////////////////
////////////////////
/////////////////////
////////////////////
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elementContainer = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content.querySelector('.element__card');

const formElement = document.querySelector('.popup__form-element');
const nameElementInput = document.querySelector('.popup__input_type_names');
const jobElementInput = document.querySelector('.popup__input_type_link');

function addCard(card) {
  elementContainer.prepend(card);
}

function createCard(text) {
  const card = elementTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  const cardLink = card.querySelector('.element__link');
  const cardImg = card.querySelector('.element__img');
  cardTitle.textContent = text.name;
  cardLink.href = text.link;
  cardImg.src = text.link;

  return card;
}

function renderElements() {
  initialCards.reverse().forEach(item => {
    const cardHtml = createCard(item);
    addCard(cardHtml);
  });
}

function submitForm(event) {
  event.preventDefault();
  const newCard = createCard(nameElementInput.value);
  const linkCard = createCard(jobElementInput.value);
  const cardTitle = document.querySelector('.element__title');
  cardTitle.textContent = newCard.value;
  addCard(newCard);
  closeElementPopup(event);
}

console.log('1+2');
formElement.addEventListener('submit', submitForm);

renderElements();
