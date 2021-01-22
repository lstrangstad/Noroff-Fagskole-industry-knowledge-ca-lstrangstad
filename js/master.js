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
