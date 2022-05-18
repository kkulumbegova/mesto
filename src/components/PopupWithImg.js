import Popup from "./Popup.js";
import { imagePopup, imageName } from "./initial.js";

export default class PopupWithImage extends Popup {
  constructor(selector, name, link) {
    super(selector);
    this._name = name;
    this._link = link;
  }
  open() {
    imagePopup.src = this._link;
    imageName.textContent = this._name;
    imagePopup.alt = this._name;
    super.open();
  }
}
