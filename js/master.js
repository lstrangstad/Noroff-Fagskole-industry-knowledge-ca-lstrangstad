const words = ["HTML..", "CSS..", "JavaScript", "React", "SASS..", "GIT.."];
let count = 0;
let index = 0;
let currentWord = "";
let letter = "";

(function typing() {
  if (count === words.length) {
    count = 0;
  }
  currentWord = words[count];
  letter = currentWord.slice(0, ++index);

  document.querySelector(".header__typing").textContent = letter;
  if (letter.length == currentWord.length) {
    count++;
    index = 0;
  }
  setTimeout(typing, 350);
})();

const formOutput = document.querySelector(".contact__form");

formOutput.addEventListener("submit", formValidator);

function formValidator(e) {
  e.preventDefault();

  const nameValue = document.querySelector("#nameInput").value;
  const nameError = document.querySelector("#nameError");

  const emailValue = document.querySelector("#emailInput").value;
  const emailError = document.querySelector("#emailError");

  const messageValue = document.querySelector("#messageInput").value;
  const messageError = document.querySelector("#messageError");

  if (nameValidator(nameValue) == !true) {
    nameError.innerHTML = "Please enter name with at least two characters";
  } else {
    nameError.style.display = "none";
  }

  if (emailValidator(emailValue) == !true) {
    emailError.innerHTML = "Please enter valid email";
  } else {
    emailError.style.display = "none";
  }

  if (nameValidator(messageValue) == !true) {
    messageError.innerHTML = "Please enter message longer than two characters";
  } else {
    messageError.style.display = "none";
  }
}

function nameValidator(string) {
  const inputValue = string.trim();
  if (inputValue.length > 2) {
    return true;
  } else {
    return false;
  }
}

function emailValidator(mail) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(mail);
}
