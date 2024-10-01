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

let minuteTravail = 25;
let secondeTravail = 0;

let minute = minuteTravail;
let seconde = secondeTravail+1;

let minutePause = 5;
let secondePause = 0;


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
                    setting.style.backgroundColor = "#d01919";
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
                    setting.style.backgroundColor = "blue";

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

function tailleIcon(element) {      
    if (window.innerWidth <= 480) {
        element.style.fontSize = '8vh'; //taille pour smartphone
    } else if (window.innerWidth <= 768) {
        element.style.fontSize = '10vh'; //taille tablette
    } else {
        element.style.fontSize = '14vh'; //valeur de base pour ordinateur
    }
}


function changeIcone() {
    let reset = document.createElement("button");
    reset.classList.add("fa-solid", "fa-rotate-left");
    reset.id = "icone";
    tailleIcon(reset);
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
    start.classList.add("fa-regular", "fa-circle-play");
    start.id = "icone";
    tailleIcon(start);
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

//listener pour ajuster la taille des icônes dans la fenêtre
window.addEventListener('resize', function() {
    tailleIcon(lancer); 
});


let setting = document.getElementById("setting");
let timeModal = document.getElementById("timeModal");

setting.addEventListener("click", function() {
    timeModal.style.display = "block"; 
  
});

// Sauvegarde les nouvelles valeurs et ferme la modale
document.getElementById("saveTime").addEventListener("click", function() {
    minuteTravail = parseInt(document.getElementById("minuteTravailInput").value);
    secondeTravail = parseInt(document.getElementById("secondeTravailInput").value);
    minutePause = parseInt(document.getElementById("minutePauseInput").value);
    secondePause = parseInt(document.getElementById("secondePauseInput").value);
    timeModal.style.display = "none";

});

// Annuler et fermer la modale
document.getElementById("cancelTime").addEventListener("click", function() {
    timeModal.style.display = "none";
    
});