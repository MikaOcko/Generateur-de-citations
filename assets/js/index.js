// Objectif : générer des citations aléatoirement quand l'utilisateur clique sur un bouton
// Cibler l'endroit où seront mises les citations générées
let citationZen = document.getElementById("p_left_citations");
let citationFood = document.getElementById("p_right_citations");
let citationsZen = document.getElementById("citations_zen");
let citationsFood = document.getElementById("citations_food");

// Fonction pour générer une combinaison de citations
    //======ZEN==========
        //Tableaux de citations
let startZen = ["L'homme", "Lorsque tu atteins le sommet,", "Si tu vois tout en gris,", "Tout", "Un moment de joie"];
let middleZen = ["change", "continue", "déplace", "est vain", "chasse"];
let endZen = ["quand nous changeons.", "à monter.", "l'éléphant.", "sauf la bonté.", "cents moments de tristesse."];

        //Fonction génératirice d'un nb (entier) aléatoire allant de 0 jusqu'à la dernière citation du tableau
function generateCitationsZen() {
    citationZen.textContent = "";

    for (let i = 0; i < citationsZen.value; i++) {
        let startZenNumber = Math.floor(Math.random() * startZen.length);
        let middleZenNumber = Math.floor(Math.random() * middleZen.length);
        let endZenNumber = Math.floor(Math.random() * endZen.length);

        let p = document.createElement("p");
        p.textContent += startZen[startZenNumber] + " " + middleZen[middleZenNumber] + " " + endZen[endZenNumber];
        citationZen.appendChild(p);
    }
}

    //========FOOD===========
let startFood = ["La gourmandise", "Les repas", "Chat gourmand", "Chaque repas que l'on fait", "Les gourmands"];
let middleFood = ["commence", "sont", "rend", "est", "font"];
let endFood = ["quand on n'a plus faim.", "les lieux innocents de la société.", "la cuisinière avisée.", "un repas de moins à faire.", "leur fosse avec leurs dents."];

function generateCitationsFood() {
    citationFood.textContent = "";

    for (let i = 0; i < citationsFood.value; i++) {
        let startFoodNumber = Math.floor(Math.random() * startFood.length);
        let middleFoodNumber = Math.floor(Math.random() * middleFood.length);
        let endFoodNumber = Math.floor(Math.random() * endFood.length);

        let p = document.createElement("p");
        p.textContent += (startFood[startFoodNumber] + " " + middleFood[middleFoodNumber] + " " + endFood[endFoodNumber]);
        citationFood.appendChild(p);
    }
}

//en cliquant sur le bouton, active la fonction qui met les citations générées dans le paragraphe au-dessus
    //=====ZEN=====
let btnLeft = document.getElementById("btn_left");
btnLeft.addEventListener("click", function () {
    if (checkInputZen() == true) {
        generateCitationsZen();
    }
})

    //=====FOOD=====
let btnRight = document.getElementById("btn_right");
btnRight.addEventListener("click", function () {
    if (checkInputFood() == true) {
        generateCitationsFood();
    }
})

//Objectif : cliquant sur le bouton citations, vérifier qu'il n'y a que des chiffres dans le champ de saisi (regex > error message)
    //=====ZEN======
function checkInputZen() {
    // seulement les chiffres sont autorisés
    let checking = false;
    let regexNumber = /^[1-5 ]{1}$/;
    let errorLeft = document.getElementById("error_left");
    errorLeft.innerText = "";
    //console.log(errorLeft.innerText);
    //console.log(citationsZen.value);
    console.log(regexNumber.test(citationsZen.value));
    if (citationsZen.value == ""){
        checking = false;
        errorLeft.innerText = "Veuillez saisir un chiffre entre 1 et 5.";
        errorLeft.style.color ="yellow";
        errorLeft.style.fontSize = "16px";
        errorLeft.style.fontWeight = "600";
    } else if(regexNumber.test(citationsZen.value) == false){
        checking = false;
        errorLeft.innerText = "Veuillez saisir un chiffre entre 1 et 5.";
        errorLeft.style.color ="yellow";
        errorLeft.style.fontSize = "16px";
        errorLeft.style.fontWeight = "600";
    } else {
        checking = true;
    }

    return checking
}

    //======FOOD=======
function checkInputFood() {
    // seulement les chiffres sont autorisés
    let checking = false;
    let regexNumber = /^[1-5 ]{1}$/;
    let errorRight = document.getElementById("error_right");

    errorRight.innerText = "";

    if (citationsFood.value == ""){
        checking = false;
        errorRight.innerText = "Veuillez saisir un chiffre entre 1 et 5.";
        errorRight.style.color ="maroon";
        errorRight.style.fontSize = "16px";
        errorRight.style.fontWeight = "600";
    } else if(regexNumber.test(citationsFood.value) == false){
        checking = false;
        errorRight.innerText = "Veuillez saisir un chiffre entre 1 et 5.";
        errorRight.style.color ="maroon";
        errorRight.style.fontSize = "16px";
        errorRight.style.fontWeight = "600";
    } else {
        checking = true;
    }

    return checking
}
