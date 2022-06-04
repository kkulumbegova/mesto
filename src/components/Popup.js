export default class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOverlay = this._closeOverlay.bind(this);
  }
  open() {
    this._selector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._closeOverlay);
  }

  close() {
    this._selector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("mousedown", this._closeOverlay);
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

  }
}
