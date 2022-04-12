
const validationConfig = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "form__submit_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active",
  };

// функция отображения ошибки
const showInputError = (inputElement, errorMessage) => {
    const errorElement = inputElement.parentNode.querySelector(`#${inputElement.id}-error`);// Находим элемент ошибки внутри функции
    inputElement.classList.add(`${validationConfig.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${validationConfig.errorClass}`);
}
// функция удаления отображения ошибки
const hideInputError = (inputElement) => {
    const errorElement = inputElement.parentNode.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(`${validationConfig.inputErrorClass}`);
    errorElement.classList.remove(`${validationConfig.errorClass}`);

}

//функция проверка инпута на валидность. При значении фолс - отображение сообщения об ошибке
const isValid = (inputElement) => {
    if(!inputElement.validity.valid) {
        showInputError(inputElement, inputElement.validationMessage);
    } else {
        hideInputError(inputElement);
    }
}

//функция проверки валидны ли ВСЕ инпуты
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {  
      return !inputElement.validity.valid;
    })
  }; 

//функция блокировки кнопки, если хотя бы один инпут не валиден
const toggleButton = (inputList, buttonElement) => {
    if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(`${validationConfig.inactiveButtonClass}`);
    } else {
        buttonElement.classList.remove(`${validationConfig.inactiveButtonClass}`);
    }
}


//функция проверки на валидность всем полям формы
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`${validationConfig.inputSelector}`)); //находим все поля в документе. делаем массив из коллекции
    const buttonElement = formElement.querySelector(`${validationConfig.submitButtonSelector}`);
    toggleButton(inputList, buttonElement);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            isValid(inputElement);
            toggleButton(inputList, buttonElement);
        });
    });
};

//функция добавление обработчика всем формам в документе. Отмена стандарного поведения браузера для формы 
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(`${validationConfig.formSelector}`));
    formList.forEach(formElement => {
        formElement.addEventListener('submit', (evt) => {
           evt.preventDefault();
        });
       setEventListeners(formElement);
    });
};

enableValidation();
