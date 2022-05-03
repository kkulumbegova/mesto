class FormValidator {
    constructor(formEl, validationConfig) {
        this._formElement = formEl;
        this._validationConfig = validationConfig;
    }
    _showInputError = (inputElement, errorMessage) => {
        const errorElement = inputElement.parentNode.querySelector(`#${inputElement.id}-error`);// Находим элемент ошибки внутри функции
        inputElement.classList.add(`${this._validationConfig.inputErrorClass}`);
        errorElement.textContent = errorMessage;
    }
    // функция удаления отображения ошибки
    _hideInputError = (inputElement) => {
        const errorElement = inputElement.parentNode.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(`${this._validationConfig.inputErrorClass}`);
    }
    //функция обнуления всех инпутов, ошибка скрывается, кнопка сохранить неактивна
    getEmpty = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(`${this._validationConfig.inputSelector}`));
        inputList.forEach(input => {
          this._hideInputError(input);
        });
        this._formElement.reset();
        const buttonSubmit = this._formElement.querySelector(`${this._validationConfig. submitButtonSelector}`);
        buttonSubmit.classList.add(`${this._validationConfig.inactiveButtonClass}`);
    }

    _isValid = (inputElement) => {
        if(!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }
    
    //функция проверки валидны ли ВСЕ инпуты
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {  
          return !inputElement.validity.valid;
        })
      }; 

//функция блокировки кнопки, если хотя бы один инпут не валиден
    _toggleButton = (inputList, buttonElement) => {
        if(this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(`${this._validationConfig.inactiveButtonClass}`);
        } else {
            buttonElement.classList.remove(`${this._validationConfig.inactiveButtonClass}`);
        }
    }
//функция проверки на валидность всем полям формы
    _setEventListeners = (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(`${this._validationConfig.inputSelector}`)); //находим все поля в документе. делаем массив из коллекции
        const buttonElement = formElement.querySelector(`${this._validationConfig.submitButtonSelector}`);
        this._toggleButton(inputList, buttonElement);
        inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButton(inputList, buttonElement);
            });
        });
    };
    enableValidation = () => {
        const formList = Array.from(document.querySelectorAll(`${this._validationConfig.formSelector}`));
        formList.forEach(formElement => {
            formElement.addEventListener('submit', (evt) => {
               evt.preventDefault();
            });
            this._setEventListeners(formElement);
        });
    };

}

export default FormValidator;