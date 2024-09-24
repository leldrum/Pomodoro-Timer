const timer = document.getElementById("timer");
const lancer = document.getElementById("icone");
let fonctionnement = false;

lancer.addEventListener("click", function() {lancement();changeIcone();});
lancer.addEventListener("click", function() {minute = 25})




let minute = 25;
let seconde = 0;


function lancement(){
        if(seconde == 0){
            minute = minute - 1;
            seconde = 59;
        } 
        else if(seconde <= 59){
            seconde = seconde -1
        }
        if(seconde < 10){
            timer.innerText = `${minute}:${'0'+seconde}`
        }
        else{
            timer.innerText = `${minute}:${seconde}`
        }
        setTimeout(lancement, 1000)
}

function zeroTimer(){

}

function changeIcone() {
    let nouvelleIcone = document.createElement("button");
    nouvelleIcone.classList.add("fa-solid", "fa-power-off");
    nouvelleIcone.id = "iconeReset"; 
    lancer.replaceWith(nouvelleIcone);
    lancer = nouvelleIcone;
}

