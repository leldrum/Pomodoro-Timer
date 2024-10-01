let timer = document.getElementById("timer");
let lancer = document.getElementById("icone");
let bouton = document.getElementById("boutons");
let page = document.getElementById("page");

let interval;

let enTravail = true;  //savoir si c'est dans la partie travail ou pause

lancer.addEventListener("click", function() {
    travail.style.color = "#ffd700";
    lancement();
    changeIcone();  //lorsqu'on lance on affiche l'icone reset
});


let travail =  document.getElementById("travail");
let pause = document.getElementById("pause");

let minuteTravail = parseInt(document.getElementById("minuteTravailInput").value);  //valeur du formulaire de base (25)
let secondeTravail = parseInt(document.getElementById("secondeTravailInput").value);
let minutePause = parseInt(document.getElementById("minutePauseInput").value);
let secondePause = parseInt(document.getElementById("secondePauseInput").value);
let heureTravail = parseInt(document.getElementById("heureTravailInput").value);
let heurePause = parseInt(document.getElementById("heurePauseInput").value);

let minute = minuteTravail;
let seconde = secondeTravail+1;

let heure = heureTravail;


function lancement(){
    if(seconde == 0){
        if(minute == 0) {
            if(heure == 0){
                clearTimeout(interval); // si chrono à 0 arret du chrono
                if(!enTravail){  //si il était en pause on change le css en rouge (travail)
                    enTravail = true;
                    minute = minuteTravail;
                    seconde = secondeTravail;
                    travail.style.color = "#ffd700";
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
                else{ //bleu pour la pause
                    enTravail = false;
                    minute = minutePause;
                    seconde = secondePause;
                    pause.style.color = "#ffd700";
                    travail.style.color = "white";
                    timer.style.backgroundColor = "mediumblue";
                    bouton.style.backgroundColor = "mediumblue";
                    pause.style.backgroundColor = 'mediumblue';
                    travail.style.backgroundColor = 'mediumblue';
                    document.body.style.backgroundColor = 'blue';
                    page.style.backgroundColor = "blue";
                    lancer.style.backgroundColor = "blue";
                    setting.style.backgroundColor = "blue";
                }
            }
            else {
                heure = heure - 1;
                minute = 59;
                seconde = 59;                   //si heure pile, on ajoute 59 à minute et seconde
            }
        }
        else if (minute <= 59) {
            minute = minute - 1;
            seconde = 59;
        }
    }        
    else if(seconde <= 59){
        seconde = seconde -1
    }
    if(heure > 0){
        if(seconde < 10 && minute < 10){
            timer.innerText = `${heure}:${'0'+minute}:${'0'+seconde}`    
        }
        else if(minute < 10 && seconde > 9){
            timer.innerText = `${heure}:${'0'+minute}:${seconde}`
        }
        else if(minute > 9 && seconde > 9){
             timer.innerText = `${heure}:${minute}:${seconde}`
        }
        else{
            timer.innerText = `${heure}:${minute}:${'0'+seconde}`
        }
    }
    else{
        if(seconde < 10){
            timer.innerText = `${minute}:${'0'+seconde}`
        }
        else{
            timer.innerText = `${minute}:${seconde}`
        }
    }
    interval = setTimeout(lancement, 1000) //défilement des secondes
}


function zeroTimer(){
    clearTimeout(interval)
    if(enTravail){ //si actuellement en travail
        minute = minuteTravail;
        seconde = secondeTravail;
         heure = heureTravail;
    }
    else{
        minute = minutePause;
        seconde = secondePause;
        heure = heurePause
        
    }
    if(heure > 0){
        if(seconde < 10 && minute < 10){
            timer.innerText = `${heure}:${'0'+minute}:${'0'+seconde}`
        }
        else if(minute < 10 && seconde > 9){
            timer.innerText = `${heure}:${'0'+minute}:${seconde}`
        }
        else if(minute > 9 && seconde > 9){
             timer.innerText = `${heure}:${minute}:${seconde}`
        }
        else{
            timer.innerText = `${heure}:${minute}:${'0'+seconde}`
        }
    }
    else{
        if(seconde < 10){
            timer.innerText = `${minute}:${'0'+seconde}`
        }
        else{
            timer.innerText = `${minute}:${seconde}`
        }
    }
    resetIcone(); 
}

//fonction pour changer la taille des icones
function tailleIcon(element) {      
    if (window.innerWidth <= 480) {
        element.style.fontSize = '8vh'; //taille pour smartphone
    } else if (window.innerWidth <= 768) {
        element.style.fontSize = '10vh'; //taille tablette
    } else {
        element.style.fontSize = '14vh'; //valeur de base pour ordinateur
    }
}


//remplace l'icone de démarage par le reset
function changeIcone() {
    let reset = document.createElement("button");
    reset.classList.add("fa-solid", "fa-rotate-left");
    reset.id = "icone";
    tailleIcon(reset); //change la taille en fonction de la taille de l'écran
    if (!enTravail) {
        reset.style.backgroundColor = "blue";   
    }
    lancer.replaceWith(reset); //remplacer l'ancienne icone par la nouvelle
    lancer = reset;  
    lancer.addEventListener("click", function() {
        zeroTimer(); //remettre le chrono de départ quand c'est appuyer
    });
}


//remplace l'icone de reset par l'icone play
function resetIcone() {
    let start = document.createElement("button");
    start.classList.add("fa-regular", "fa-circle-play");
    start.id = "icone";
    tailleIcon(start);  //change la taille en fonction de la taille de l'écran
    if (!enTravail) {
        start.style.backgroundColor = "blue";   
    }
    lancer.replaceWith(start);  //remplacer l'ancienne icone par la nouvelle
    lancer = start;  
    lancer.addEventListener("click", function() {
        lancement(); //lancer le chrono
        changeIcone();  // mettre l'icone reset
    });
}

//listener pour ajuster la taille des icônes dans la fenêtre directement
window.addEventListener('resize', function() {
    tailleIcon(lancer); 
});


let setting = document.getElementById("setting");
let formulModif = document.getElementById("formulModif");


//appuie sur les paramètres pour modifier les heures
setting.addEventListener("click", function() {
    timer.style.display = "none";  //enlever le chrono
    formulModif.style.display = "block"; // mettre le formulaire à la place
});

//lorqu'il y a enregistrement
document.getElementById("saveTime").addEventListener("click", function() {
    minuteTravail = parseInt(document.getElementById("minuteTravailInput").value); //prendre la nouvelle valeur
    secondeTravail = parseInt(document.getElementById("secondeTravailInput").value);
    minutePause = parseInt(document.getElementById("minutePauseInput").value);
    secondePause = parseInt(document.getElementById("secondePauseInput").value);
    heureTravail = parseInt(document.getElementById("heureTravailInput").value);
    heurePause = parseInt(document.getElementById("heurePauseInput").value);

    formulModif.style.display = "none"; 
    timer.style.display = "flex"; //remettre le chrono
    if(enTravail){ //si actuellement en travail
        minute = minuteTravail;
        seconde = secondeTravail;
        heure = heureTravail
        
    }
    else{
        minute = minutePause;
        seconde = secondePause;
        heure = heurePause
        
    }
    if(heure > 0){
        if(seconde < 10 && minute < 10){
            timer.innerText = `${heure}:${'0'+minute}:${'0'+seconde}`
        }
        else if(minute < 10 && seconde > 9){
            timer.innerText = `${heure}:${'0'+minute}:${seconde}`
        }
        else if(minute > 9 && seconde > 9){
             timer.innerText = `${heure}:${minute}:${seconde}`
        }
        else{
            timer.innerText = `${heure}:${minute}:${'0'+seconde}`
        }
    }
    else{
        if(seconde < 10){
            timer.innerText = `${minute}:${'0'+seconde}`
        }
        else{
            timer.innerText = `${minute}:${seconde}`
        }
    }
    //modifier l'affichage du chrono directement
});

//annuler et fermer le formulaire
document.getElementById("cancelTime").addEventListener("click", function() {
    formulModif.style.display = "none";
    timer.style.display = "flex";
});