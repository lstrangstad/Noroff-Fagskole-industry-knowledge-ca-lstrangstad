const words = ["HTML", "CSS", "JavaScript", "React", "SASS", "GIT"];
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
const errorMessage = document.querySelector(".error-message");

formOutput.addEventListener("submit", formValidator);

function formValidator(e) {
  e.preventDefault();

  const nameValue = document.querySelector("#nameInput").value;

  if (nameValidator(nameValue) == !true) {
    errorMessage.innerHTML = "Please enter name with at least two characters";
  } else {
    errorMessage.style.display = "none";
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

function emailValidator()