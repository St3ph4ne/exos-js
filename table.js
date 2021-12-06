let leap = false;
let longMonth = false;

// let jour;
// let mois;
// let annee;

var jour_lendemain;
var mois_lendemain;
var annee_lendemain;
var jour_veille;
var mois_veille;
var annee_veille;

// enregistrement du jour de départ:
jour = parseInt(prompt("quel jour?"));
mois = parseInt(prompt("quel mois?"));
annee = parseInt(prompt("quelle année?"));

// affichage du jour de départ:
console.log(jour);
console.log(mois);
console.log(annee);

// vérification des mois en 31 jours:
if(mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12){
  longMonth = true;
  alert("Le mois compte 31 jours");
}

// vérification des années bissextiles:
if((annee % 4 === 0 && (annee % 100) != 0) || (annee % 400) === 0 ){
  leap = true;
  alert("L'année est bissextile.");
}

// vérification de la validité de la date de départ:
if(jour < 1 || jour > 31 || mois < 1 || mois > 12 || (mois === 2 && jour > 29) || annee < 1582){
  alert("date erronée !");
} else {
  
  // Affichage de la date du lendemain:
  
  // cas du 28 février:
  if(jour === 28 && mois === 2 && leap === false){
    jour_lendemain = 1;
    mois_lendemain = mois +1;
    annee_lendemain = annee;
  
    // cas du 30 d'un mois en 30 jours:
  } else if(jour === 30 && longMonth === false){
    jour_lendemain = 1;
    mois_lendemain = mois + 1;
    annee_lendemain = annee;

    // cas du 31 décembre:
  } else if(jour === 31 && mois === 12){
    jour_lendemain = 1;
    mois_lendemain = 1;
    annee_lendemain = annee + 1;

    // cas du 31 des autres mois:
  } else if(jour === 31){
    jour_lendemain = 1;
    mois_lendemain = mois + 1;
    annee_lendemain = annee;

    // les autres cas:
  } else {
    jour_lendemain =  jour + 1;
    mois_lendemain = mois;
    annee_lendemain = annee;
  }
  
  console.log(jour_lendemain);
  console.log(mois_lendemain);
  console.log(annee_lendemain);
  
  
  // Pour l'affichage de la date de la veille:
  let longLastMonth = false;
  
  // vérification si le mois précédent est en 31 jours:
  if( mois === 1 || mois === 2 || mois === 4 || mois === 6 || mois === 8 || mois === 9 || mois === 11){
    longLastMonth = true;
  };
  
  // cas du 1er janvier:
  if(jour === 1 && mois === 1){
    jour_veille = 31;
    mois_veille = 12;
    annee_veille = annee - 1;
  
    //cas du 1er mars d'une année bissextile:
  } else if(jour === 1 && mois === 3 && leap === true){
    jour_veille = 29;
    mois_veille = mois - 1;
    annee_veille = annee;
  
    // cas du 1er mars d'une année non-bissextile:
  } else if(jour === 1 && mois === 3 && leap === false){
    jour_veille = 28;
    mois_veille = mois - 1;
    annee_veille = annee;
  
    // cas du 1er quand le mois précédent est en 31 jours:
  } else if(jour === 1 && (longLastMonth)){
    jour_veille = 31;
    mois_veille = mois - 1;
    annee_veille = annee;
  
    // cas du 1er quand le mois précédent est en 30 jours:
  } else if(jour === 1 && (!longLastMonth)){
    jour_veille = 30;
    mois_veille = mois - 1;
    annee_veille = annee;

    // les autres cas:
  } else {
    jour_veille = jour - 1;
    mois_veille = mois;
    annee_veille = annee;
  }
  
  console.log(jour_veille);
  console.log(mois_veille);
  console.log(annee_veille);

}

