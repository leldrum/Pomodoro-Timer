const timer = document.getElementById("timer");
const lancer = document.getElementById("icone");
lancer.addEventListener("click", function() {lancement()});


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

