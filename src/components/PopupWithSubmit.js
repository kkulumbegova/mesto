
import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._selector.querySelector(".form");
    //this.__handleSubmitForm = handleSubmitForm;
  }

  setSubmitHandler = ({ handler }) => {
  super.open();
  this._submitHandler = handler;

}

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitHandler();
        this.close();
  });
}
}