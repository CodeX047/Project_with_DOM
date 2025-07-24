let oneTo100 = parseInt(Math.random() * 100 + 1);
let submitBtn = document.getElementById("guessSubmit");
let userInput = document.getElementById("guessInput");
let guessSlot = document.getElementById("guesses");
let remainingGuess = document.getElementById("remaining");
let score = document.getElementById("lowOrHi");
let startOver = document.getElementById("result");

let p = document.createElement("p");

let randColor;
let prevGuess = [];
let numGuess = 0;

let playGame = true;

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (playGame) {
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  }
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 1) {
    alert("Enter a number Greater than 1");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${oneTo100}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === oneTo100) {
    displayMessage(`You guessed it right!`);
    randColor = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 100);
    endGame();
  } else if (guess < oneTo100) {
    displayMessage(`Your guess is TOO Low`);
  } else if (guess > oneTo100) {
    displayMessage(`Your guess is TOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += `${guess}, `;
  numGuess++;
  remainingGuess.textContent = `${10 - numGuess}`;
}

function displayMessage(message) {
  score.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.style.textAlign = "center";
  p.style.marginTop = "30px";
  p.style.marginLeft = "40px";
  p.style.padding = "3px";
  p.style.backgroundColor = "#1a1a1a";
  p.style.color = "#fff";
  p.style.borderRadius = "6px";
  p.style.cursor = "pointer";
  p.innerHTML = '<h2 id="newGame">Start a New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  p.addEventListener("click", newGame);
}


function newGame() {
  oneTo100 = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 0;
  guessSlot.textContent = "";
  remainingGuess.textContent = `${10 - numGuess}`;
  userInput.removeAttribute("disabled");
  startOver.removeChild(p);
  clearInterval(randColor);
  document.body.style.backgroundColor = "#212121";
  score.innerHTML = "";
  playGame = true;
}

// random Color
let randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};