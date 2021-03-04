// Function disappearance / appearance of rules and switch text "Voir les règles" to "Enlever les règles" 

const btn = document.querySelector('.rules');
const span = document.getElementById("rulesTxt");


btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.innerHTML === 'Voir les règles') {
    btn.innerHTML = 'Enlever les règles';
  } else {
    btn.innerHTML = 'Voir les règles';
  }
  if (span.style.display == "inline") {
    span.style.display = "none";
  } else {
    span.style.display = "inline";
  }
}

//////////////////////////////////////////////////

// Function start the game

/* let saisie = document.getElementById("inputNb");*/
const buttonStart = document.querySelector('.startGame');
const ropasc = document.querySelectorAll(".rock, .paper, .scissors");

buttonStart.addEventListener("click", startGame);

function startGame(){
  if (ropasc.style.display == "none"){
    ropasc.style.display = "inline";
  }
}

///////////////////////////////////////////////////

// Function game

const buttons = document.querySelectorAll(".rock, .paper, .scissors");
let scorePlayer = 0;
let scoreRobot = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", game);
  
  function game() {

    const player = buttons[i].innerHTML
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML; // Pick randomly a number (int) between 1 and 3 (buttons.length (3))
    let resultat = "";
    if (player === robot) {
      resultat = "Égalité";

    } else if ((player === "Pierre" && robot === "Ciseaux") || (player === "Feuille" && robot === "Pierre") || (player === "Ciseaux" && robot === "Feuille")) {
      resultat = "Le joueur a gagné";
      scorePlayer += 1;
    } else {
      resultat = "Le joueur a perdu";
      scoreRobot += 1;
    }

    document.querySelector(".scoring").innerHTML=`Joueur : ${scorePlayer} / Robot : ${scoreRobot} `;

    document.querySelector(".result").innerHTML = ` </br> Joueur : ${player} </br> 
                    Robot : ${robot} </br> 
                    ${resultat} </br>`;

  }
}

///////////////////////////////////////////////////////