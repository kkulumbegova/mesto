let editButton = document.querySelector('.profile__editButton');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.close-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input_name');
let inputJob = document.querySelector('.popup__input_job');
let formElement = document.querySelector('.popup__container');
let submitButton = document.querySelector('.popup__submit');

editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
})

closeButton.addEventListener('click', function() {
        popup.classList.remove('popup_opened');
})



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;

        popup.classList.remove('popup_opened');

}

formElement.addEventListener('submit', formSubmitHandler);