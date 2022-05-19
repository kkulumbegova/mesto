import Popup from "./Popup.js";
import { imagePopup, imageName } from ".././utils/initial.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }
  open(name, link) {
    imagePopup.src = link;
    imageName.textContent = name;
    imagePopup.alt = name;
    super.open();
  }
}
