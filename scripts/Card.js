class Card {
  constructor(data, cardSelector, handleOpenPicture) {
    this._data = data;
    this._cardSelector = cardSelector;
    this._handleOpenPicture = handleOpenPicture;
  }
  _createCard = () => {
    this._card = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    this._cardImg = this._card.querySelector('.card__img');
    this._cardLike = this._card.querySelector('.card__like');
    this._card.querySelector('.card__name').textContent = this._data.name;
    this._cardImg.src = this._data.link;
    this._cardImg.alt = this._data.name;
    this._setListeners();
  }
  _like = () => {
    this._cardLike.classList.toggle('card__like_active');
  }
  
  _delete = () => {
    if(this._card) {
      this._card = null;
    }
  }
  
  _setListeners = () => {
    this._card.querySelector('.card__delete').addEventListener('click', () => {
      this._delete();
    });
    this._cardLike.addEventListener('click', () => {
      this._like();
    });
    this._cardImg.addEventListener('click', () => {
      this._handleOpenPicture(this._data.name, this._data.link);
    });
  }
  
  
  getCard = () => {
    if(!this._card) {
      this._createCard();
    }
  return this._card;
  }
}

export default Card;