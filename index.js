(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=t((function e(t,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_createCard",(function(){i._card=document.querySelector(i._cardSelector).content.querySelector(".card").cloneNode(!0),i._cardImg=i._card.querySelector(".card__img"),i._cardLike=i._card.querySelector(".card__like"),i._card.querySelector(".card__name").textContent=i._data.name,i._cardImg.src=i._data.link,i._cardImg.alt=i._data.name,i._setListeners()})),n(this,"_toggleLike",(function(){i._cardLike.classList.toggle("card__like_active")})),n(this,"_delete",(function(){i._card&&(i._card.remove(),i._card=null)})),n(this,"_setListeners",(function(){i._card.querySelector(".card__delete").addEventListener("click",(function(){i._delete()})),i._cardLike.addEventListener("click",(function(){i._toggleLike()})),i._cardImg.addEventListener("click",(function(){i._handleClickCard(i._data.name,i._data.link)}))})),n(this,"getCard",(function(){return i._card||i._createCard(),i._card})),this._data=t,this._cardSelector=r,this._handleClickCard=o}));const o=r;function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=c((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_showInputError",(function(e,t){var n=e.parentNode.querySelector("#".concat(e.id,"-error"));e.classList.add("".concat(r._validationConfig.inputErrorClass)),n.textContent=t})),a(this,"_hideInputError",(function(e){e.parentNode.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove("".concat(r._validationConfig.inputErrorClass))})),a(this,"resetFormState",(function(){r._inputList=Array.from(r._formElement.querySelectorAll("".concat(r._validationConfig.inputSelector))),r._inputList.forEach((function(e){r._hideInputError(e)})),r._formElement.reset(),r._buttonSubmit=r._formElement.querySelector("".concat(r._validationConfig.submitButtonSelector)),r._buttonSubmit.classList.add("".concat(r._validationConfig.inactiveButtonClass))})),a(this,"_isValid",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),a(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),a(this,"_toggleButton",(function(){r._hasInvalidInput(r._inputList)?r._buttonElement.classList.add("".concat(r._validationConfig.inactiveButtonClass)):r._buttonElement.classList.remove("".concat(r._validationConfig.inactiveButtonClass))})),a(this,"_setEventListeners",(function(){r._inputList=Array.from(r._formElement.querySelectorAll("".concat(r._validationConfig.inputSelector))),r._buttonElement=r._formElement.querySelector("".concat(r._validationConfig.submitButtonSelector)),r._toggleButton(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButton(r._inputList,r._buttonElement)}))}))})),a(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._formElement=t,this._validationConfig=n}));const l=u;var s={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error"},f=document.querySelector(".popup__img"),p=document.querySelector(".popup__card-name"),d=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),y=document.querySelector(".card__delete"),m=document.querySelector(".form__input_type_name"),h=document.querySelector(".form__input_type_job"),v=document.querySelector(".form_edit"),b=document.querySelector(".form_add");function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArr=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItem",value:function(){var e=this;this._initialArr.map((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeOverlay=this._closeOverlay.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._selector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._closeOverlay)}},{key:"close",value:function(){this._selector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._closeOverlay)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeOverlay",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){this._selector.querySelector(".popup__close-button").addEventListener("click",this.close.bind(this))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function P(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._selector.querySelector(".form"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._selector.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;j(q(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){j(q(c.prototype),"close",this).call(this),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(S);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function A(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(n=[{key:"open",value:function(e,t){f.src=t,p.textContent=e,f.alt=e,B(D(c.prototype),"open",this).call(this)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(S);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(t),this._infoSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,job:this._infoSelector.textContent}}},{key:"setUserInfo",value:function(e){this._nameSelector.textContent=e.name,this._infoSelector.textContent=e.job}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z=new l(v,s),M=new l(b,s),G=new F(".popup_img"),H=function(e,t){G.open(e,t)},J=function(e){return new o(e,"#card-item-template",H).getCard()},K=new w({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){K.addItem(J(e),"end")}},".cards__list");K.renderItem();var Q=new I(".popup_add",(function(e){K.addItem(J(e),"start")})),W=new N(".profile__name",".profile__description"),X=new I(".popup_edit",(function(e){W.setUserInfo(e)})),Y=new S(".popup_confirm");y.addEventListener("click",(function(){Y.open()})),d.addEventListener("click",(function(){z.resetFormState();var e=W.getUserInfo(),t=e.name,n=e.job;m.value=t,h.value=n,X.open()})),_.addEventListener("click",(function(){M.resetFormState(),Q.open()})),Q.setEventListeners(),X.setEventListeners(),z.enableValidation(),M.enableValidation(),G.setEventListeners(),fetch("https://mesto.nomoreparties.co/v1/cohort-42/users/me",{headers:{authorization:"d9ecc7ea-74d4-4434-a19f-32ba4a822294"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})();