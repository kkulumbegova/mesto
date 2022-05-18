export default class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
  }
  open() {
    this._selector.classList.add("popup_opened");
  }

  close() {
    this._selector.classList.remove("popup_opened");

    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _closeOverlay(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }
  setEventListeners() {
    this._selector
      .querySelector(".popup__close-button")
      .addEventListener("click", this.close.bind(this));
    document.addEventListener("mousedown", this._closeOverlay.bind(this));
  }
}
