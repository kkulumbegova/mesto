
class Card {
  constructor({ data }, cardSelector, { handleClickCard, handleDeleteClick, handleLike }) {
    this._data = data.data;
    this._currentId = data.currentId;
    this._cardSelector = cardSelector;
    this._handleClickCard = handleClickCard;
    this._likes = data.data.likes;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
  }

  _createCard = () => {
    this._card = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._cardImg = this._card.querySelector(".card__img");
    this._cardLike = this._card.querySelector(".card__like");
    this._cardDeleteButton = this._card.querySelector(".card__delete");

    this._card.querySelector(".card__name").textContent = this._data.name;
    this._cardImg.src = this._data.link;
    this._cardImg.alt = this._data.name;


    this._card.querySelector(".card__likecounter").textContent = this._likes.length;
    this._cardDeleteButton.classList.add(this._currentId === this._data.owner._id ? 'card__delete_visible' : 'card__delete_hidden');

    this.isLikeActive();
    this._setListeners();
  };

  id = () => {
    return this._data._id;
  }

  setLikesInfo = (data) => {
    this._likes = data.likes;
    this._updateLikes();
  }

  isLikeActive = () => {
    this._likes.forEach(el => {
      if (el._id === this._currentId) {
        this._cardLike.classList.add("card__like_active")
      }
    });
  }

  isLiked = () => {
    if (this._cardLike.classList.contains("card__like_active")) {
      return true;
    }
  }

  _updateLikes = () => {
    this._card.querySelector(".card__likecounter").textContent = this._likes.length;
    this._cardLike.classList.toggle("card__like_active");
  }
  delete = () => {
    this._card.remove();
    this._card = null;
  }
  _setListeners = () => {
    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
    this._cardLike.addEventListener("click", () => {
      this._handleLike(this);
    });
    this._cardImg.addEventListener("click", () => {
      this._handleClickCard(this._data.name, this._data.link);
    });
  };

  getCard = () => {
    if (!this._card) {
      this._createCard();
    }
    return this._card;
  };
}

export default Card;
