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

const formElement = document.querySelectorAll('#popup__form');

const inputName = document.querySelector('.popup__input_type_name1');
const inputLink = document.querySelector('.popup__input_type_link');

const sumbitButton = document.querySelector('.popup__sumbit-button-form');

function createElement(text) {
  const element = elementTemplate.cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  elementTitle.textContent = text['name'];
  const elementLink = element.querySelector('.element__link');
  elementLink.href = text['link'];
  const elementImg = element.querySelector('.element__img');
  elementImg.src = text['link'];
  return element;
};

function renderElements() {
  initialCards.forEach(item => {
    const elementHtml = createElement(item);
    elementContainer.append(elementHtml);
  });
};

function sumbitForm(event) {
  event.preventDefault();
  const newCard = createElement();
  const elementTitle = document.querySelector('.element__title');
  elementTitle.textContent = inputName.value;
  const elementLink = document.querySelector('.element__link');
  elementLink.textContent = inputLink.value;
  console.log('newCard: ', newCard);
  elementContainer.append(newCard);
  closePopup();
}

sumbitButton.addEventListener('sumbit', sumbitForm);

renderElements();




// const form = document.querySelector('.form');
// const input = document.querySelector('.form__input');
// const button = document.querySelector('.form__submit');

// function deleteCard(event) {
// 	event.target.closest('.element__card').remove();
// }

// function cloneCard(event) {
// 	const clonedCard = event.target.closest('.list__item').cloneNode(true);
// 	addCard(clonedCard);
// }


// function editCard(event) {
// 	const cardText = event.target.closest('.list__item').querySelector('.item__text');
// 	cardText.setAttribute('contenteditable', true);
// 	cardText.focus();

// 	function finishEditCard() {
// 		cardText.removeAttribute('contenteditable');
// 		cardText.removeEventListener('blur', finishEditCard);
// 	}

// 	cardText.addEventListener('blur', finishEditCard);
// }

// function addCardEventListeners (card) {
// 	const deleteButton = cardTemplate.querySelector('.element__delete-button');
// 	deleteButton.addEventListener('click', deleteCard);

// 	const cloneButton = card.querySelector('.duplicate');
// 	cloneButton.addEventListener('click', cloneCard);

// 	const editButton = card.querySelector('.edit');
// 	editButton.addEventListener('click', editCard);
// }

// function createCard(text) {
// 	const card = cardTemplate.cloneNode(true);
// 	const cardText = card.querySelector('.item__text');
// 	cardText.textContent = text;
// 	addCardEventListeners(card);

// 	return card;
// }

// function addCard(card) {
// 	cardsContainer.prepend(card);
// }

// function renderCards(texts) {
// 	texts.reverse().forEach(item => {
// 		const cardHtml = createCard(item);
// 		addCard(cardHtml);
// 	});
// }


// function submitForm(event) {
// 	event.preventDefault();

// 	const newCard = createCard(input.value);
// 	addCard(newCard);
// }


// form.addEventListener('submit', submitForm);

// renderCards(items);

