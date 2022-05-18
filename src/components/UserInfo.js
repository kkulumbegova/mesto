export default class UserInfo {
  constructor(nameSelector, infoSelector) {
    this._nameSelector = document.querySelector(nameSelector);
    this._infoSelector = document.querySelector(infoSelector);
  }

  getUserInfo() {
    const userCurrentInfo = {
      name: this._nameSelector.textContent,
      job: this._infoSelector.textContent,
    };
    return userCurrentInfo;
  }

  setUserInfo(data) {
    this._nameSelector.textContent = data.name;
    this._infoSelector.textContent = data.job;
  }
}
