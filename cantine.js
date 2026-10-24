 // declaration de variables
 let nomClient = "Awa";
let codePlat = 1;         
let quantiteTexte = "3";  
let montantVerse = 4000;

// Conversion de la quantité en nombre
let quantite = Number(quantiteTexte);

// variables globales de travail
let nomplat;
let prixUnitaire;

// determination du prix avec switch

switch (codePlat) {
    case 1:
        nomPlat = "Attiéké-poisson";
        prixUnitaire = 1500;
        break;
    case 2:
        nomPlat = "Riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        nomPlat = "Alloco-œuf";
        prixUnitaire = 1000;
        break;
    default:
        console.log("Code plat invalide !");
}

// fonction calcul
function calculerTotal(prix, qte) {
    return prix * qte;
}

// Appel de la fonction
let totalAPayer = calculerTotal(prixUnitaire, quantite);

// Affichage du recapitulatif

console.log(`--- RÉCAPITULATIF COMMANDE DE ${nomClient} ---`);
console.log(`Plat choisi : ${nomPlat}`);
console.log(`Prix unitaire : ${prixUnitaire} FCFA`);
console.log(`Quantité commandée : ${quantite}`);
console.log("\n--- Préparation des portions ---");

