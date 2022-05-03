import Card from "./Card.js";
import  FormValidator from "./FormValidator.js";
import { initialCards, validationConfig } from "./initial.js";

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
const imagePopup = document.querySelector('.popup__img');
const imageName = document.querySelector('.popup__card-name');
const buttonSubmit = document.querySelector('.form__submit');
const profileEdit = new FormValidator(form, validationConfig);
const pictureAdd = new FormValidator(formAdd, validationConfig );

const createCard = (cardData) => {
  const card = new Card(cardData, '#card-item-template', handleOpenPicture).getCard();
  return card;
}

function openPopup(el) {
  el.classList.add('popup_opened');
  document.addEventListener('keydown', handleClosePopupEsc);
}
//закрытие попапа(удаление модификатора)//
function closePopup(el) {
  el.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleClosePopupEsc);
}

const handleOpenPicture = (name, link) => {
  imagePopup.src = link;
  imageName.textContent = name;
  imagePopup.alt = name;
  openPopup(popupImg);
};

//закрытие нажатием на конопку esc
const handleClosePopupEsc = (evt) => {
  if(evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  };
};

//закрытие нажатием на оверлэй
const closeOverlay = (evt) => {
  const currentPopup = document.querySelector('.popup_opened');
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(currentPopup);
  };
};

// // создаем карточки для каждого элемента массива//
initialCards.map(data => {
  const card = createCard(data);
  cardsList.append(card);
});

//функция добавления карточки//
const addCard = (event) => {
  event.preventDefault();
  const newData = {name: inputCardName.value,
                  link:inputLink.value};
  cardsList.prepend(createCard(newData));
  closePopup(popupAdd);
  inputCardName.value = '';
  inputLink.value = '';
}


//функция добавления данных пользователя//
function submitFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEdit);
}

buttonEdit.addEventListener('click', () => {
  profileEdit.getEmpty();
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupEdit);
}); 

buttonEditClose.addEventListener('click',() => {
  closePopup(popupEdit);
});


buttonAdd.addEventListener('click', () => {
  pictureAdd.getEmpty();  
  openPopup(popupAdd);
});

buttonAddClose.addEventListener('click',() => {
  closePopup(popupAdd);
});

// закрытие попапа с картинкой//
buttonImgClose.addEventListener('click', () => {
  closePopup(popupImg);
})

document.addEventListener('mousedown', closeOverlay);
formAdd.addEventListener('submit', addCard);
form.addEventListener('submit', submitFormHandler);
profileEdit.enableValidation();
pictureAdd.enableValidation();

