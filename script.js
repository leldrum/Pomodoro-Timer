let timer = document.getElementById("timer");
let lancer = document.getElementById("icone");
let bouton = document.getElementById("boutons");
let page = document.getElementById("page");

let interval

let enTravail = true;

lancer.addEventListener("click", function() {
    travail.style.color = "yellow";
    lancement();
    changeIcone();
});


let travail =  document.getElementById("travail");
let pause = document.getElementById("pause")

let minuteTravail = 0;
let secondeTravail = 6;

let minute = minuteTravail;
let seconde = secondeTravail+1;

let minutePause = 0;
let secondePause = 10;


function lancement(){
            
        if(seconde == 0){
            if(minute == 0) {
                clearTimeout(interval);  
                if(!enTravail){
                    enTravail = true;
                    minute = minuteTravail;
                    seconde = secondeTravail;
                    travail.style.color = "yellow";
                    pause.style.color = "white";
                    timer.style.backgroundColor = "#c10000";
                    bouton.style.backgroundColor = "#c10000";
                    pause.style.backgroundColor = '#c10000';
                    travail.style.backgroundColor = '#c10000';
                    document.body.style.backgroundColor = '#d01919';
                    page.style.backgroundColor = "#d01919";
                    lancer.style.backgroundColor = "#d01919";
                }
                else{
                    enTravail = false;
                    minute = minutePause;
                    seconde = secondePause;
                    pause.style.color = "yellow";
                    travail.style.color = "white";
                    timer.style.backgroundColor = "blue";
                    bouton.style.backgroundColor = "blue";
                    pause.style.backgroundColor = 'blue';
                    travail.style.backgroundColor = 'blue';
                    document.body.style.backgroundColor = 'blue';
                    page.style.backgroundColor = "blue";
                    lancer.style.backgroundColor = "blue";
                }
            }
            else{
            minute = minute - 1;
            seconde = 59;
            }
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
      
        interval = setTimeout(lancement, 1000)
}


function zeroTimer(){
    clearTimeout(interval)
    if(enTravail){
        minute = minuteTravail;
        seconde = secondeTravail;
       
    }
    else{
        minute = minutePause;
        seconde = secondePause;
    }
    
    if(seconde < 10){
        timer.innerText = `${minute}:${'0'+seconde}`
    }
    else{
        timer.innerText = `${minute}:${seconde}`
    }
    resetIcone();
    
}


function changeIcone() {
    let reset = document.createElement("button");
    reset.classList.add("fa-solid", "fa-rotate-left", "fa-8x");
    reset.id = "icone";
    if (!enTravail) {
        reset.style.backgroundColor = "blue";   
    }
    lancer.replaceWith(reset);
    lancer = reset;
    lancer.addEventListener("click", function() {
        zeroTimer();
    });
}

function resetIcone() {
    let start = document.createElement("button");
    start.classList.add("fa-regular", "fa-circle-play", "fa-8x");
    start.id = "icone";
    if (!enTravail) {
        start.style.backgroundColor = "blue";   
    }
    lancer.replaceWith(start);
    lancer = start;  
    lancer.addEventListener("click", function() {
        lancement(); 
        changeIcone();  
    });
}
