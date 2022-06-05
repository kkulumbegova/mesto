export default class Popup {
  constructor(selector) {
    this.__popupElement = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closeOverlay = this._closeOverlay.bind(this);
  }
  open() {
    this.__popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._closeOverlay);
  }

  close() {
    this.__popupElement.classList.remove("popup_opened");
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
    this.__popupElement
      .querySelector(".popup__close-button")
      .addEventListener("click", this.close.bind(this));

  }
}
