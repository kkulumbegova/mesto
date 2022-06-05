import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";


export default class PopupWithAvatar extends PopupWithForm {
  constructor(selector, handleFormSubmitAvatar) {
    super(selector);
    this._handleFormSubmitAvatar = handleFormSubmitAvatar;
    this._form = this.__popupElement.querySelector(".form");
    this._input = this.__popupElement.querySelector(".form__input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmitAvatar(this._input.value)
    });
  }
}
