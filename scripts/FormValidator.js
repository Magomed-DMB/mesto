export default class FormValidator {
  constructor (data, formElement) {
    this._formElement = formElement;
    this._data = data;
  }
  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.add(this._data.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._data.inputErrorClass);
  }
  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._data.errorClass);
    this._errorElement.textContent = '';
    inputElement.classList.remove(this._data.inputErrorClass);
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.checkValidity()) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
    return !inputElement.checkValidity();
  });
  }
  _disableSubmitButton() {
    this._buttonElement.classList.add(this._data.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._data.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableSubmitButton(this._buttonElement);
    } else {
      this._enableSubmitButton(this._buttonElement);
    }
  }
  _resetValidationInput() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._data.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElement);
      });
    });
  };
  enableValidation() {
    this._setEventListeners();
  }
}
