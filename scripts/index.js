import Card from "./Card.js";
import  FormValidator from "./FormValidator.js";

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
const buttonEditClose = document.querySelector('.popup__close-button_edit');
const buttonAddClose = document.querySelector('.popup__close-button_add');
const buttonImgClose = document.querySelector('.popup__close-button_img');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const inputName = document.querySelector('.form__input_type_name');
const inputJob = document.querySelector('.form__input_type_job');
const inputCardName = document.querySelector('.form__input_type_card-name');
const inputLink = document.querySelector('.form__input_type_link');
const form = document.querySelector('.form_edit');
const formAdd = document.querySelector('.form_add');
const cardsList = document.querySelector('.cards__list');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
};
const image = document.querySelector('.popup__img');
const imageName = document.querySelector('.popup__card-name');
const buttonSubmit = document.querySelector('.form__submit');

const profileEdit = new FormValidator(form, validationConfig);
const pictureAdd = new FormValidator(formAdd, validationConfig );


function openPopUp(el) {
  el.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
//закрытие попапа(удаление модификатора)//
function closePopUp(el) {
  el.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

const popupPictureOpen = (name, link) => {
image.src = link;
imageName.textContent = name;
image.alt = name;
openPopUp(popupImg);
};

//закрытие нажатием на конопку esc
const closePopupEsc = (evt) => {
if(evt.key === 'Escape') {
 const currentPopup = document.querySelector('.popup_opened');
  closePopUp(currentPopup);
};
};

//закрытие нажатием на оверлэй
const closeOverlay = (evt) => {
const currentPopup = document.querySelector('.popup_opened');
   if(evt.target.classList.contains('popup_opened')) {
     closePopUp(currentPopup);
   };
};

// // создаем карточки для каждого элемента массива//
initialCards.map(data => {
  const card = new Card(data, '#card-item-template', popupPictureOpen).getCard();
  cardsList.append(card);
});



//функция добавления карточки//
const addCard = (event) => {
  event.preventDefault();
  const newData = {name: inputCardName.value,
                  link:inputLink.value};
  cardsList.prepend(new Card(newData, '#card-item-template', popupPictureOpen).getCard());
  closePopUp(popupAdd);
  inputCardName.value = '';
  inputLink.value = '';
}

//функция добавления данных пользователя//
function submitFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopUp(popupEdit);
}

buttonEdit.addEventListener('click', () => {
  profileEdit.getEmpty();
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopUp(popupEdit);
}); 
buttonEditClose.addEventListener('click',() => {
  closePopUp(popupEdit);
});


buttonAdd.addEventListener('click', () => {
  pictureAdd.getEmpty();  
  openPopUp(popupAdd);
});
buttonAddClose.addEventListener('click',() => {
  closePopUp(popupAdd);
});

// закрытие попапа с картинкой//
buttonImgClose.addEventListener('click', () => {
  closePopUp(popupImg);
})

document.addEventListener('mousedown', closeOverlay);
formAdd.addEventListener('submit', addCard);
form.addEventListener('submit', submitFormHandler);
profileEdit.enableValidation();
pictureAdd.enableValidation();

