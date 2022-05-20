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
} from "../utils/initial.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImg.js";
import UserInfo from "../components/UserInfo.js";

const profileEdit = new FormValidator(form, validationConfig);
const pictureAdd = new FormValidator(formAdd, validationConfig);
const popupImg = new PopupWithImage(".popup_img");


const handleClickCard = (name, link) => {
  popupImg.open(name, link);
};

const createNewCard = (data) => {
  const newCard = new Card(
    data,
    "#card-item-template",
    handleClickCard
  ).getCard();
  return newCard;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (initialCards) => {
      cardList.addItem(createNewCard(initialCards), "end");
    },
  },
  ".cards__list"
);
cardList.renderItem();

const popupAdd = new PopupWithForm(".popup_add", (formData) => {
  cardList.addItem(createNewCard(formData), "start");
});

const newUser = new UserInfo(".profile__name", ".profile__description");
const popupEdit = new PopupWithForm(".popup_edit", (formData) => {
  newUser.setUserInfo(formData);
});

buttonEdit.addEventListener("click", () => {
  profileEdit.resetFormState();
  const { name, job } = newUser.getUserInfo();
  inputName.value = name;
  inputJob.value = job;
  popupEdit.open();
});

buttonAdd.addEventListener("click", () => {
  pictureAdd.resetFormState();
  popupAdd.open();
});

popupAdd.setEventListeners();
popupEdit.setEventListeners();
profileEdit.enableValidation();
pictureAdd.enableValidation();
popupImg.setEventListeners();