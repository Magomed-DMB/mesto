const buttonEdit = document.querySelector('.profile__edit-button');
const aboutPopup = document.querySelector('.popup');
const buttonClose = aboutPopup.querySelector('.popup__close-button');

let formElement = document.querySelector('#popup__form');
let nameInput = aboutPopup.querySelector('.popup__input_type_name');
let jobInput = aboutPopup.querySelector('.popup__input_type_text');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function popupOpen () {
  aboutPopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}
function popupClose () {
  aboutPopup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popupClose ();
}

buttonEdit.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);
