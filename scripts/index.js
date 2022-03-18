let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');
let inputName = document.querySelector('.form__input_type_name');
let inputJob = document.querySelector('.form__input_type_job');
let popupContainer = document.querySelector('.popup__container');
let submitButton = document.querySelector('.form__submit');




function openPopUp() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function closePopUp() {
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopUp) 
closeButton.addEventListener('click', closePopUp)



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopUp();
}

popupContainer.addEventListener('submit', formSubmitHandler);