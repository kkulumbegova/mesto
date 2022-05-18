import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  validationConfig,
  buttonEdit,
  buttonAdd,
  inputName,
  inputJob,
  form,
  formAdd,
} from "../components/initial.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImg.js";
import UserInfo from "../components/UserInfo.js";

const profileEdit = new FormValidator(form, validationConfig);
const pictureAdd = new FormValidator(formAdd, validationConfig);

const handleClickCard = (name, link) => {
  const popupImg = new PopupWithImage(".popup_img", name, link);
  popupImg.open();
  popupImg.setEventListeners();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (initialCards) => {
      const card = new Card(
        initialCards,
        "#card-item-template",
        handleClickCard
      ).getCard();
      cardList.addItem(card, "end");
    },
  },
  ".cards__list"
);
cardList.renderItem();

const popupAdd = new PopupWithForm(".popup_add", (formData) => {
  const newCard = new Card(
    formData,
    "#card-item-template",
    handleClickCard
  ).getCard();
  cardList.addItem(newCard, "start");
});

const newUser = new UserInfo(".profile__name", ".profile__description");
const popupEdit = new PopupWithForm(".popup_edit", (formData) => {
  newUser.setUserInfo(formData);
});

buttonEdit.addEventListener("click", () => {
  inputName.value = newUser.getUserInfo().name;
  inputJob.value = newUser.getUserInfo().job;
  popupEdit.open();
});

buttonAdd.addEventListener("click", () => {
  pictureAdd.getEmpty();
  popupAdd.open();
});

popupAdd.setEventListeners();
popupEdit.setEventListeners();
profileEdit.enableValidation();
pictureAdd.enableValidation();
