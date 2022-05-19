class FormValidator {
  constructor(formEl, validationConfig) {
    this._formElement = formEl;
    this._validationConfig = validationConfig;
  }
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = inputElement.parentNode.querySelector(
      `#${inputElement.id}-error`
    ); // Находим элемент ошибки внутри функции
    inputElement.classList.add(`${this._validationConfig.inputErrorClass}`);
    errorElement.textContent = errorMessage;
  };
  // функция удаления отображения ошибки
  _hideInputError = (inputElement) => {
    const errorElement = inputElement.parentNode.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.textContent = "";
    inputElement.classList.remove(`${this._validationConfig.inputErrorClass}`);
  };
  //функция обнуления всех инпутов, ошибка скрывается, кнопка сохранить неактивна
  resetFormState = () => {
    const inputList = Array.from(
      this._formElement.querySelectorAll(
        `${this._validationConfig.inputSelector}`
      )
    );
    inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._formElement.reset();
    const buttonSubmit = this._formElement.querySelector(
      `${this._validationConfig.submitButtonSelector}`
    );
    buttonSubmit.classList.add(`${this._validationConfig.inactiveButtonClass}`);
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //функция проверки валидны ли ВСЕ инпуты
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //функция блокировки кнопки, если хотя бы один инпут не валиден
  _toggleButton = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(
        `${this._validationConfig.inactiveButtonClass}`
      );
    } else {
      this._buttonElement.classList.remove(
        `${this._validationConfig.inactiveButtonClass}`
      );
    }
  };
  //функция проверки на валидность всем полям формы
  _setEventListeners = () => {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(
        `${this._validationConfig.inputSelector}`
      )
    ); //находим все поля в документе. делаем массив из коллекции
    this._buttonElement = this._formElement.querySelector(
      `${this._validationConfig.submitButtonSelector}`
    );
    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButton(this._inputList, this._buttonElement);
      });
    });
  };
  enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}

export default FormValidator;
