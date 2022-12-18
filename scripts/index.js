const buttonEdit = document.querySelector('.profile__edit-button');
const aboutPopup = document.querySelector('.popup');
const buttonClose = aboutPopup.querySelector('.popup__close-button');

buttonEdit.addEventListener('click', (event) => {
  event.preventDefault();
  aboutPopup.classList.add('popup_opened');
});
buttonClose.addEventListener('click', (event) => {
  aboutPopup.classList.remove('popup_opened');
});

// Находим форму в DOM
let formElement = document.querySelector('#popup__form') // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = aboutPopup.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = aboutPopup.querySelector('.popup__text'); // Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description'); // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', handleFormSubmit);

// formElement.addEventListener('submit', (event) => {
//   event.preventDefault();
//   aboutPopup.classList.remove('popup_opened');
// }); // закрываем попап
