const buttonEdit = document.querySelector('.profile__edit-button');
const aboutPopup = document.querySelector('.popup');
const buttonClose = aboutPopup.querySelector('.popup__close-button');

let formElement = document.querySelector('#popup__form');
let nameInput = aboutPopup.querySelector('.popup__input_type_name');
let jobInput = aboutPopup.querySelector('.popup__input_type_text');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    aboutPopup.classList.remove('popup_opened');
    nameInput.value = 'Жак-Ив Кусто';
    jobInput.value = 'Исследователь океана';
}

function popupOpen () {
  aboutPopup.classList.add('popup_opened');
}
function popupClose () {
  aboutPopup.classList.remove('popup_opened');
}

buttonEdit.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);
