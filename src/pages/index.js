import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  validationConfig,
  buttonEdit,
  buttonAdd,
  form,
  formAdd,
  buttonAvatar
} from "../utils/initial.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImg.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import PopupWithAvatar from "../components/PopupWithAvatar.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

let userId = null;
const profileEdit = new FormValidator(form, validationConfig);
const pictureAdd = new FormValidator(formAdd, validationConfig);
const popupImg = new PopupWithImage(".popup_img");
const newUser = new UserInfo(".profile__name", ".profile__description");
const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-42',
  token: 'd9ecc7ea-74d4-4434-a19f-32ba4a822294'
})

const handleFormSubmitAvatar = (formData) => {
  renderLoading(true, '.popup_avatar');
 api.changeAvatar(formData)
  .then((res) => {
     document.querySelector('.profile__avatar').style.backgroundImage = `url("${res.avatar}")`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, '.popup_avatar');
    popupAvatar.close()
  });
}
const popupAvatar = new PopupWithAvatar('.popup_avatar', handleFormSubmitAvatar);



const handleClickCard = (name, link) => {
  popupImg.open(name, link);
};


const handleDeleteClick = (card) => {
  popupConfirm.setSubmitHandler({
   handler: () =>{
    api.deleteCard(card.id())
    .then(() => {
      card.delete();
     })
    .catch((err) => {
      console.log(err);
    })
   }
  })
}


const createNewCard = (data) => {
  const newCard = new Card(
    {data: data,
    currentId: userId},
    "#card-item-template",
    {handleClickCard, changeLikeStatus, handleDeleteClick}
  ).getCard();
  return newCard;
}

const popupEdit = new PopupWithForm(".popup_edit", (formData) => {
  renderLoading(true, '.popup_edit');
  api.editProfile(formData)
  .then(() => {
    newUser.setUserInfo(formData);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    renderLoading(false, '.popup_edit');
    popupEdit.close()
  })
});


api.getAllNeededData()
.then(data => {
  const [ dataFromGetInfo, dataFromGetItems ] = data;
  userId = dataFromGetInfo._id;
  const cardList = new Section(
    {
      items: dataFromGetItems,
      renderer: (dataFromGetItems) => {
        cardList.addItem(createNewCard({data: dataFromGetItems,
          currentId: userId}), "end");
      },
    },
    ".cards__list"
  );
  cardList.renderItem();
  document.querySelector('.profile__name').textContent = dataFromGetInfo.name;
  document.querySelector('.profile__description').textContent = dataFromGetInfo.about;
  document.querySelector('.profile__avatar').style.backgroundImage = `url(${dataFromGetInfo.avatar})`;
 
  const popupAdd = new PopupWithForm(".popup_add", (formData) => {
   renderLoading(true, '.popup_add');
   api.addCard(formData)
    .then(formData => {
    cardList.addItem(createNewCard({data: formData, currentId: userId}), "start")
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, '.popup_add');
      popupAdd.close()
    });
  });
  popupAdd.setEventListeners();
  buttonAdd.addEventListener("click", () => {
    pictureAdd.resetFormState();
    popupAdd.open();
  });
});


const changeLikeStatus = (id, isLiked) => {
  return api.changeLikeStatus(id, isLiked);
}

// const handleSubmitForm = (card, id) => {
// return api.deleteCard(id)
//  .then(() => {
//    card.remove();
//    card = null;
//  })
//  .catch((err) => {
//    console.log(err);
//  });
// }
const popupConfirm = new PopupWithSubmit('.popup_confirm')




const renderLoading = (isLoading, popupSelector) => {
  if(isLoading) {
    document.querySelector(popupSelector).querySelector('.form__submit').textContent = 'Сохранение...'
  } else {
    document.querySelector(popupSelector).querySelector('.form__submit').textContent = 'Сохранить'
  }
}




buttonAvatar.addEventListener(('click'), () => popupAvatar.open());
buttonEdit.addEventListener("click", () => {
popupEdit.open();
});
profileEdit.enableValidation();
pictureAdd.enableValidation();
popupImg.setEventListeners();
popupConfirm.setEventListeners();
popupEdit.setEventListeners();
popupAvatar.setEventListeners();