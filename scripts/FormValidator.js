export default class FormValidator {
  constructor (validationconfig, formElement) {
    this._formElement = formElement;
    this._validationconfig = validationconfig;
  }
  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.add(this._validationconfig.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._validationconfig.inputErrorClass);
  }
  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._validationconfig.errorClass);
    this._errorElement.textContent = '';
    inputElement.classList.remove(this._validationconfig.inputErrorClass);
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
    this._buttonElement.classList.add(this._validationconfig.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._validationconfig.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableSubmitButton(this._buttonElement);
    } else {
      this._enableSubmitButton(this._buttonElement);
    }
  }
  resetValidationInput() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationconfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationconfig.submitButtonSelector);
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
