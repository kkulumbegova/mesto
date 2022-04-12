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
const template = document.querySelector('#card-item-template');
const image = document.querySelector('.popup__img');
const imageName = document.querySelector('.popup__card-name');



//открытие попапа(добавление модификатора)//
function openPopUp(el) {
    el.classList.add('popup_opened');
}
//закрытие попапа(удаление модификатора)//
function closePopUp(el) {
    el.classList.remove('popup_opened');
   //при закрытии все инпуты из попапа обнуляются и ошибка скрывается
   const inputList = Array.from(el.querySelectorAll(`${validationConfig.inputSelector}`));
   inputList.forEach(input => {
     hideInputError(input);
   });
   const form = el.querySelector(`${validationConfig.formSelector}`);
   form.reset();
}

buttonEdit.addEventListener('click', () => {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    openPopUp(popupEdit);
}); 
buttonEditClose.addEventListener('click',() => {
    closePopUp(popupEdit);
});


buttonAdd.addEventListener('click', () => {
    openPopUp(popupAdd);
});
buttonAddClose.addEventListener('click',() => {
    closePopUp(popupAdd);
});

//закрытие нажатием на конопку esc
const closePopupEsc = (evt) => {
  const currentPopup = document.querySelector('.popup_opened');
     if(evt.key === 'Escape') {
       closePopUp(currentPopup);
     };
};
document.addEventListener('keydown', closePopupEsc);

//закрытие нажатием на оверлэй
const closeOverlay = (evt) => {
  const currentPopup = document.querySelector('.popup_opened');
     if(evt.target.classList.contains('popup_opened')) {
       closePopUp(currentPopup);
     };
};
document.addEventListener('mousedown', closeOverlay);


const createCard = (el) => {
  const card = template.content.querySelector('.card').cloneNode(true);
  card.querySelector('.card__name').textContent = el.name;
  card.querySelector('.card__img').src = el.link;
  card.querySelector('.card__img').alt = el.name;

  //лайк при нажатии на сердечко//
  card.querySelector('.card__like').addEventListener('click', function(evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle('card__like_active');
  })
    
  //удаление карточки//  
  card.querySelector('.card__delete').addEventListener('click', () => {
      card.remove();
  })
  //попап с картинкой//
  card.querySelector('.card__img').addEventListener('click', function(evt) {
      image.src = el.link;
      imageName.textContent = el.name;
      image.alt = el.name;
      openPopUp(popupImg);
  })

  return card;
}
// применяем функцию по созданию карточки для каждого элемента массива//
initialCards.map(el => {
    cardsList.append(createCard(el));
})
// закрытие попапа с картинкой//
buttonImgClose.addEventListener('click', () => {
  closePopUp(popupImg);
})

//функция добавления карточки//
const addCard = (event) => {
  event.preventDefault();
  const newCard = {name: inputCardName.value,
                  link:inputLink.value};
  cardsList.prepend(createCard(newCard));
  closePopUp(popupAdd);
  inputCardName.value = '';
  inputLink.value = '';
}
formAdd.addEventListener('submit', addCard);

//функция добавления данных пользователя//
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopUp(popupEdit);
}
form.addEventListener('submit', formSubmitHandler);
