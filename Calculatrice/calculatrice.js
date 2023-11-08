console.log("diel")

// Sélectionner tous les boutons
let boutons = document.querySelectorAll("button");
var valeur1 = null;
var operateur = null;

// Boucle sur chaque bouton
for (var i = 0; i < boutons.length; i++) {
    // Ajouter un gestionnaire d'événements à chaque bouton
    boutons[i].addEventListener("click", function() {
        // Récupérer la valeur du bouton
        var valeur = this.innerText;

        if (valeur === "+" || valeur === "-" || valeur === "*" || valeur === "/") {
            // Si l'utilisateur a cliqué sur un opérateur, stocker la première valeur et l'opérateur
            valeur1 = parseFloat(input.value);
            operateur = valeur;
            input.value = "";
        } else if (valeur === "=") {
            // Si l'utilisateur a cliqué sur "=", effectuer le calcul
            if (operateur && valeur1 !== null && input.value !== "") {
                var valeur2 = parseFloat(input.value);
                if (operateur === "+") {
                    input.value = addition(valeur1, valeur2);
                } else if (operateur === "-") {
                    input.value = soustraction(valeur1, valeur2);
                } else if (operateur === "*") {
                    input.value = multiplication(valeur1, valeur2);
                } else if (operateur === "/") {
                    input.value = division(valeur1, valeur2);
                }
            } else {
                alert("Veuillez entrer une valeur avant de cliquer sur '='.");
            }
            // Réinitialiser la première valeur et l'opérateur
            valeur1 = null;
            operateur = null;
        } else if (valeur === "C") {
            // Si l'utilisateur a cliqué sur "C", réinitialiser la calculatrice
            valeur1 = null;
            operateur = null;
            input.value = "";
        } else {
            // Si l'utilisateur a cliqué sur un nombre, ajouter le nombre à la valeur actuelle
            input.value += valeur;
        }
    });
}


// Ajouter un gestionnaire d'événements pour les touches du clavier
window.addEventListener("keydown", function(event) {
    // Récupérer la touche pressée
    var touche = event.key;

    // Vérifier si la touche correspond à un bouton
    for (var i = 0; i < boutons.length; i++) {
        if (boutons[i].innerText === touche) {
            // Simuler un clic sur le bouton
            boutons[i].click();
        }
    }
});

// Sélectionner l'élément d'entrée
var input = document.getElementById("sortie");

// Ajouter un gestionnaire d'événements pour l'événement 'input'
input.addEventListener("input", function() {
    // Remplacer le placeholder par la valeur entrée par l'utilisateur
    this.placeholder = this.value;
});

// fonction lie au calcul
function addition(a,b){
    return a+b
}

function soustraction(a,b){
    return a-b
}

function multiplication(a,b){
    return a*b
}

function division(a,b){
    return a/b
}

