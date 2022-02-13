"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".number").textContent = "?";

let tries = 0;
let score = 20;

document.querySelector(".highscore").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "C'mon, guess SOMETHING";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✅ Correct Number!";
    tries++;
    document.querySelector(".score").textContent = tries;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (tries > 20) {
      document.querySelector(".highscore").textContent =
        "You failure in life smh";
    } else {
      if (tries < score) {
        score = tries;
        document.querySelector(".highscore").textContent = score;
      }
    }
  } else if (guess > secretNumber) {
    if (guess - secretNumber >= 15) {
      document.querySelector(".message").textContent = "📈 Too High ;-;";
      tries++;
      document.querySelector(".score").textContent = tries;
    } else if (guess - secretNumber >= 10) {
      document.querySelector(".message").textContent = "📈 A bit high ;-;";
      tries++;
      document.querySelector(".score").textContent = tries;
    } else if (guess - secretNumber >= 5) {
      document.querySelector(".message").textContent =
        "📈 Very close, but High ;-;";
      tries++;
      document.querySelector(".score").textContent = tries;
    } else if (guess - secretNumber < 5) {
      document.querySelector(".message").textContent =
        "📈 Oh just in reach now! ;-;";
      tries++;
    }
  } else if (guess < secretNumber) {
    if (secretNumber - guess >= 15) {
      document.querySelector(".message").textContent = "📉 Too Low ;-;";
      tries++;
      document.querySelector(".score").textContent = tries;
    } else if (secretNumber - guess >= 10) {
      document.querySelector(".message").textContent = "📉 A bit Low ;-;";
      tries++;
      document.querySelector(".score").textContent = tries;
    } else if (secretNumber - guess >= 5) {
      document.querySelector(".message").textContent =
        "📉 Very close, but Low ;-;";
      tries++;
      document.querySelector(".score").textContent = tries;
    } else if (secretNumber - guess < 5) {
      document.querySelector(".message").textContent =
        "📉 Oh just in reach now! ;-;";
      tries++;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  tries = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = tries;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
