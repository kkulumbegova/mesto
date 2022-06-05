import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imagePopup = document.querySelector(".popup__img");
    this._imageName = document.querySelector(".popup__card-name");
  }
  open(name, link) {
    this._imagePopup.src = link;
    this._imageName.textContent = name;
    this._imagePopup.alt = name;
    super.open();
  }
}
