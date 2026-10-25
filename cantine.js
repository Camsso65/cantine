 // declaration de variables
 let nomClient = "Awa";
let codePlat = 1;         
let quantiteTexte = "3";  
let montantVerse = 5000;

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

console.log(`--- recapitulatif de la commande de ${nomClient} ---`);
console.log(`Plat choisi : ${nomPlat}`);
console.log(`Prix unitaire : ${prixUnitaire} FCFA`);
console.log(`Quantité commandée : ${quantite}`);
console.log("\n--- Préparation des portions ---");

// Boucle pour afficher chaque portion
for (let i = 1; i <= quantite; i++) {
    console.log(`[Portion ${i}/${quantite}] Préparation de ton ${nomPlat}... ok !`);
}
console.log("\n--- Caisse ---");
console.log(`Total à payer : ${totalAPayer} FCFA`);
console.log(`Montant versé : ${montantVerse} FCFA`);

// Condition pour la monnaie ou le manque
if (montantVerse >= totalAPayer) {
    let monnaie = montantVerse - totalAPayer;
    console.log(`OK Paiement accepté. Monnaie à rendre : ${monnaie} FCFA`);
} else {
    let manquant = totalAPayer - montantVerse;
    console.log(`non Paiement insuffisant. Il manque : ${manquant} FCFA`);
}
console.log("------------------------------------------\n");

