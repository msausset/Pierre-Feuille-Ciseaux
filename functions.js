var btn = document.querySelector('.rules');


btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Voir les règles') {
    btn.value = 'Enlever les règles';
  } else {
    btn.value = 'Voir les règles';
  }
  console.log(btn);
}

function rules() {
    let span = document.getElementById("rulesTxt");
    if (span.style.display == "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }

}



const buttons = document.querySelectorAll(".RPS");
let scorePlayer = 0;
let scoreRobot = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        const player = buttons[i].innerHTML
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
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

        document.querySelector(".result").innerHTML = `Joueur : ${player} </br> 
                    Robot : ${robot} </br> 
                    ${resultat} </br> 
                    Score du joueur : ${scorePlayer} </br> 
                    Score du robot : ${scoreRobot} `;

    })
}