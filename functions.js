// Function disappearance / appearance of rules and switch text "Voir les règles" to "Enlever les règles" 

const buttonRules = document.querySelector('.rules');
const span = document.getElementById("rulesTxt");


buttonRules.addEventListener("click", updateBtn);

function updateBtn() {
  if (buttonRules.innerHTML === 'Voir les règles') {
    buttonRules.innerHTML = 'Enlever les règles';
  } else {
    buttonRules.innerHTML = 'Voir les règles';
  }
  if (span.style.display == "inline") {
    span.style.display = "none";
  } else {
    span.style.display = "inline";
  }
}

///////////////////////////////////////////////////////

// Function start the game

let input = document.getElementById("inputNb"); // input.value
const divLapsGame = document.querySelector(".lapsGame");
const buttonStart = document.querySelector('.startGame');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

buttonStart.addEventListener("click", startGame);

function startGame() {
  divLapsGame.style.display = "none";
  rock.style.display = "inline";
  paper.style.display = "inline";
  scissors.style.display = "inline";
  win.style.display = "inline";
  scoring.style.display = "inline";
  result.style.display = "inline";
}

///////////////////////////////////////////////////////

// Function game

const buttons = document.querySelectorAll(".rock, .paper, .scissors");
let scorePlayer = 0;
let scoreRobot = 0;
let nameWinner = "";

for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", game);


  function game() {

    const player = buttons[i].innerHTML
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML; // Pick randomly a number (int) between 1 and 3 (buttons.length (3))
    let resultat = "";
    let limit = input.value;

    if (player === robot) {
      resultat = "Égalité";
    } else if ((player === "Pierre" && robot === "Ciseaux") || (player === "Feuille" && robot === "Pierre") || (player === "Ciseaux" && robot === "Feuille")) {
      resultat = "Le joueur a gagné la manche";
      scorePlayer += 1;
      if (scorePlayer == limit) {
        nameWinner = "Le joueur ";
        stopFunction();
      }
    } else {
      resultat = "Le joueur a perdu la manche";
      scoreRobot += 1;
      if (scoreRobot == limit) {
        nameWinner = "Le robot ";
        stopFunction();
      }
    }

    let scoring = document.querySelector(".scoring").innerHTML = `Joueur : ${scorePlayer} / Robot : ${scoreRobot} </br>`;

    let result = document.querySelector(".result").innerHTML = ` </br> Joueur : ${player} </br> 
                    Robot : ${robot} </br> 
                    ${resultat} </br> `;
  }
}

////////////////////////////////////////////////////////

// Function to stop the game when the limit defined by the player at the beginning is over 

const buttonStartOver = document.getElementById("startOver");

function stopFunction() {

  buttonStartOver.style.display = "inline";
  rock.style.display = "none";
  paper.style.display = "none";
  scissors.style.display = "none";
  document.querySelector(".win").innerHTML = `${nameWinner} a gagné la partie !`;
}

///////////////////////////////////////////////////////

const win = document.getElementById("win");
const scoring = document.getElementById("scoring");
const result = document.getElementById("result");

function startOver() {
  scorePlayer = 0;
  scoreRobot = 0;
  buttonStartOver.style.display = "none";
  win.style.display = "none";
  scoring.style.display = "none";
  result.style.display = "none";
  divLapsGame.style.display = "inline-block";
  win.innerHTML = "";
  scoring.innerHTML = "";
  result.innerHTML = "";
}