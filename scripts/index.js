const popupProfileOpen = document.querySelector('.popup_profile');
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupElementOpen = document.querySelector('.popup_element');
const buttonElementAdd = document.querySelector('.profile__add-button');
const buttonCloseList = document.querySelectorAll('.popup__close-button');
const formProfile = document.querySelector('.popup__form-profile');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_text');

const elementContainer = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content.querySelector('.element__card');

const formElement = document.querySelector('.popup__form-element');
const nameElementInput = document.querySelector('.popup__input_type_names');
const jobElementInput = document.querySelector('.popup__input_type_link');

const popupViewImage = document.querySelector(".popup_images-open");
const popupImageTitle = popupViewImage.querySelector(".popup__title-image");
const popupImage = popupViewImage.querySelector(".popup__image");

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', hadleEscKeyup);
  document.addEventListener('click', hadleOverlayClick);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  const submitElement = popup.querySelector('.popup__submit-button');
  disableSubmitButton(submitElement);
};

function hadleEscKeyup(e) {
  if (e.key === 'Escape') {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  }
}
function hadleOverlayClick(e) {
  if (e.target.classList.contains('popup_opened')) {
        closePopup(e.target);
  }
}

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileOpen);
};
function openElementPopup() {
  openPopup(popupElementOpen);
};

function closeProfilePopup() {
  closePopup(popupProfileOpen);
};

function closeElementPopup() {
  closePopup(popupElementOpen);
};

buttonProfileEdit.addEventListener('click', openProfilePopup);
buttonElementAdd.addEventListener('click', openElementPopup);

buttonCloseList.forEach((button) => {
  button.addEventListener('click', () => {
    const currentPopup = button.closest('.popup');
    closePopup(currentPopup);
  });
});

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeProfilePopup(event);
}

formProfile.addEventListener('submit', handleFormSubmit);

function addCard(card) {
  elementContainer.prepend(card);
}

function deleteCard(event) {
  event.target.closest('.element__card').remove();
}

function likeCard(event) {
  event.target.classList.toggle('element__like-button_active');
}

function openImagePopup(card) {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupImageTitle.textContent = card.name;
  openPopup(popupViewImage);
}

function addCardEventListeners(card) {
  const deleteButton = card.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = card.querySelector('.element__like-button');
  likeButton.addEventListener('click', likeCard);
}

function createCard(cards) {
  const card = elementTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  const cardLink = card.querySelector('.element__link');
  const cardImg = card.querySelector('.element__img');
  cardTitle.textContent = cards.name;
  cardLink.href = cards.link;
  cardImg.src = cards.link;
  addCardEventListeners(card);

  cardImg.addEventListener("click", () => {
    openImagePopup(cards);
  });

  return card;
}

function renderElements() {
  initialCards.reverse().forEach(item => {
    const cardHtml = createCard(item);
    addCard(cardHtml);
  });
}

function submitFormElement(event) {
  event.preventDefault();
  const newCard = createCard({
    name: nameElementInput.value,
    link: jobElementInput.value
  });
  addCard(newCard);
  closeElementPopup(event);
  formElement.reset();
}

formElement.addEventListener('submit', submitFormElement);

renderElements();
