export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._initialCards.map((data) => {
      this._renderer(data);
    });
  }
  addItem(element, place) {
    if (place === "start") {
      this._container.prepend(element);
    } else if (place === "end") {
      this._container.append(element);
    }
  }
}
