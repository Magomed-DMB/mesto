import Card from './Card.js';
import FormValidator from '/FormValidator.js';

const popupProfileOpen = document.querySelector('.popup_profile');
const popupElementOpen = document.querySelector('.popup_element');
const popupFormProfile = document.querySelector('.popup__form-profile');

const buttonProfileEdit = document.querySelector('.profile__edit-button');
const buttonElementAdd = document.querySelector('.profile__add-button');
const buttonCloseList = document.querySelectorAll('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_text');

const elementContainer = document.querySelector('.element');

const formElement = document.querySelector('.popup__form-element');
const nameElementInput = document.querySelector('.popup__input_type_names');
const linkElementInput = document.querySelector('.popup__input_type_link');

const popupViewImage = document.querySelector(".popup_images-open");
const popupImageTitle = popupViewImage.querySelector(".popup__title-image");
const popupImage = popupViewImage.querySelector(".popup__image");

// Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', hadleEscKeyup);
  popup.addEventListener('click', hadleOverlayClick);
};

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  // openPopup(popupProfileOpen);
};

function openImagePopup(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageTitle.textContent = name;
  // openPopup(popupViewImage);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', hadleEscKeyup);
  popup.removeEventListener('click', hadleOverlayClick);
};
function closeProfilePopup() {
  closePopup(popupProfileOpen);
};
function closeElementPopup() {
  closePopup(popupElementOpen);
};
// Закрытие попапа нажатием кнопки ESC
function hadleEscKeyup(e) {
  if (e.key === 'Escape') {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  }
}
// Закрытие попапа наложением
function hadleOverlayClick(e) {
  if (e.target.classList.contains('popup_opened')) {
        closePopup(e.target);
  }
}

// Функция создания карточки
function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    ".element-template",
    openImagePopup
  );
  return cardElement.generateCard();
}

// Функция возвращения карточки
function renderElements() {
  initialCards.reverse().forEach(item => {
    const cardHtml = createCard(item);
    addCard(cardHtml);
  });
}
// Закрытие попапа крестиком
buttonCloseList.forEach((button) => {
  const currentPopup = button.closest('.popup');
  button.addEventListener("click", () => closePopup(currentPopup));
});

const validateProfileForm = new FormValidator(config, popupProfileOpen);
const validateElementForm = new FormValidator(config, popupElementOpen);

validateProfileForm.enableValidation();
validateElementForm.enableValidation();

buttonProfileEdit.addEventListener("click", () => {
  validateProfileForm._resetValidationInput();
  openPopup(popupProfileOpen);
  openProfilePopup();
});

buttonElementAdd.addEventListener("click", () => {
  validateElementForm._resetValidationInput();
  openPopup(popupElementOpen);
});

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeProfilePopup(event);
  popupFormProfile.reset();
}

function addCard(card) {
  elementContainer.prepend(card);
}

function submitFormElement(event) {
  event.preventDefault();
  const newCard = createCard({
    name: nameElementInput.value,
    link: linkElementInput.value
  });
  addCard(newCard);
  closeElementPopup(event);
  formElement.reset();
}

popupProfileOpen.addEventListener('submit', handleFormSubmit);
popupElementOpen.addEventListener('submit', submitFormElement);
renderElements(initialCards);
