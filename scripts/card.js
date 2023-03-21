export default class Card {
  constructor(data, templateSelector, openedImagePopup) {
   this._typeName = data.name;
   this._typeLink = data.link;
   this._openImagePopup = openedImagePopup;
   this._templateSelector = templateSelector;
  }
  _getTemplate() {
     const cardElement = document
     .querySelector('.element-template')
     .content.querySelector('.element__card')
     .cloneNode(true);

     return cardElement;
 }

   generateCard() {
   this._element = this._getTemplate();
   this._elementDelete = this._element.querySelector(".element__delete-button");
   this._elementImage = this._element.querySelector(".element__img");
   this._elementTitle = this._element.querySelector(".element__title");
   this._elementLike = this._element.querySelector(".element__like-button");
   this._elementImage.src = this._typeLink;
   this._elementImage.alt = this._typeName;
   this._elementTitle.textContent = this._typeName;
   this._setEventListeners();

   return this._element;
 }
 _deleteCard() {
   this._element.remove();
 }
 _likeCard() {
   this._elementLike.classList.toggle('element__like-button_active');
 }
 _setEventListeners() {
   this._elementDelete.addEventListener('click', () => {
     this._deleteCard();
   });
   this._elementLike.addEventListener('click', () => {
     this._likeCard();
   });
   this._elementImage.addEventListener('click', () => {
     this._openImagePopup(this._typeLink, this._typeName);
   });
 }
 }
//
