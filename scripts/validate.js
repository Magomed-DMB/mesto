const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function showInputError(formElement, inputElement, object) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.classList.add(object.errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

function hideInputError(formElement, inputElement, object) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, object) {
  if (!inputElement.checkValidity()) {
    showInputError(formElement, inputElement, object, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement, object);
  }
};

function setEventListeners(formElement, object) {
  const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  const submitElement = formElement.querySelector(object.submitButtonSelector);
    toggleButtonState(inputList, submitElement, object);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement, object);
          toggleButtonState(inputList, submitElement, object);
        });
      });
};

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.checkValidity();
});
}

function disableSubmitButton(buttonElement) {
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.setAttribute('disabled', true);
}
function enableSubmitButton(buttonElement) {
  buttonElement.classList.remove('popup__button_disabled');
  buttonElement.removeAttribute('disabled');
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement);
  } else {
    enableSubmitButton(buttonElement);
  }
}

function enableValidation(object) {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, object);
    });
  }

enableValidation(config);
