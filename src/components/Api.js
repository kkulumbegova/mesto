const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject('Ошибка')
}

export default class Api {
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl;
    this.token = token;
  }
  //информация о пользователе
  getInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: { authorization: this.token }
    })
      .then(handleResponse)
  }
  //получение массива с карточками
  getItems() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: { authorization: this.token }
    })
      .then(handleResponse);
  }
  //ожидание исполнения двух промисов - с данными о пользователе и карточками
  getAllNeededData() {
    return Promise.all([this.getInfo(), this.getItems()]);
  }
  //редактирование профиля
  editProfile(formData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        about: formData.job
      })
    })
      .then(handleResponse);
  }
  addCard(formData) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        link: formData.link
      })
    })
      .then(handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
    })
      .then(handleResponse)
  }
  addLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
    })
      .then(handleResponse)
  }

  deleteLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
    })
      .then(handleResponse)
  }
  changeLikeStatus(id, isLiked) {
    if (isLiked) {
      return this.addLike(id)
    } else {
      return this.deleteLike(id)
    }
  }
  changeAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link,
      })
    })
      .then(handleResponse);
  }
}