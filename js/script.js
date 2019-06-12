var popup = document.querySelector(".modal-callback");
var overlay = document.querySelector(".overlay");
var openButton = document.querySelector(".contacts-button");
var closeButton = popup.querySelector(".modal-close");
var userName = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-callback-email]");
var text = popup.querySelector("[name=user-callback-text]");
var form = popup.querySelector(".form-callback");

var isStorageSupport = true;
var storage = "";

try {
  userNameStorage = localStorage.getItem("userName");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  if (userNameStorage) {
    userName.value = userNameStorage;
    email.focus();
    if (emailStorage) {
      email.value = emailStorage;
      text.focus();
    }
  } else {
    userName.focus();
  }
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});