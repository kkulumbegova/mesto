const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImg = document.querySelector('.popup_img');
const closeButtonEdit = document.querySelector('.popup__close-button_edit');
const closeButtonAdd = document.querySelector('.popup__close-button_add');
const closeButtonImg = document.querySelector('.popup__close-button_img');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const inputName = document.querySelector('.form__input_type_name');
const inputJob = document.querySelector('.form__input_type_job');
const inputCardName = document.querySelector('.form__input_type_card-name');
const inputLink = document.querySelector('.form__input_type_link');
const form = document.querySelector('.form_edit');
const formAdd = document.querySelector('.form_add');
const cardsList = document.querySelector('.cards__list');


//открытие попапа(добавление модификатора)//
function openPopUp(el) {
    el.classList.add('popup_opened');
}
//закрытие попапа(удаление модификатора)//
function closePopUp(el) {
    el.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => {
    openPopUp(popupEdit);
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}); 
closeButtonEdit.addEventListener('click',() => {
    closePopUp(popupEdit);
});


addButton.addEventListener('click', () => {
    openPopUp(popupAdd);
});
closeButtonAdd.addEventListener('click',() => {
    closePopUp(popupAdd);
});



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

const createCard = (el) => {
  const template = document.querySelector('#card-item-template').content;
  const card = template.querySelector('.card').cloneNode(true);
  card.querySelector('.card__name').textContent = el.name;
  card.querySelector('.card__img').src = el.link;

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
      openPopUp(popupImg);
      document.querySelector('.popup__img').src = el.link;
      document.querySelector('.popup__card-name').textContent = el.name;
  })
  closeButtonImg.addEventListener('click', () => {
    closePopUp(popupImg);
})
  return card;
}
// применяем функцию по созданию карточки для каждого элемента массива//
initialCards.map(el => {
    cardsList.append(createCard(el));
})


//функция добавления карточки//
const addCard = (event) => {
  event.preventDefault();
  let newCard = {name: inputCardName.value,
                  link:inputLink.value};
  cardsList.prepend(createCard(newCard));
  inputCardName.value = '';
  inputLink.value = '';
  closePopUp(popupAdd);
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
