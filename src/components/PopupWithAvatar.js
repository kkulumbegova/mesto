import Popup from "./Popup.js";


export default class PopupWithAvatar extends Popup {
  constructor(selector, handleFormSubmitAvatar) {
    super(selector);
    this._handleFormSubmitAvatar = handleFormSubmitAvatar;
    this._form = this._selector.querySelector(".form");
    this._input = this._selector.querySelector(".form__input");
    this._button = this._selector.querySelector(".form__submit");
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmitAvatar(this._input.value)
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}
