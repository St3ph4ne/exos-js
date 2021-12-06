// enregistrement du jour de départ:
let age = parseInt(prompt("Votre âge svp?"));
let seniority = parseInt(prompt("Depuis combien d'années avez-vous le permis ?"));
let rugged = parseInt(prompt("Combien avez-vous déjà eu d'accident.s ?"));
let assured = parseInt(prompt("Depuis combien d'années êtes-vous assuré.e ?"));
let tarif;
let bonus = false;

const table = ["Votre tarif est A", "Votre tarif est B", "Votre tarif est C", "Votre tarif est D", "Nous regrettons de ne pouvoir vous assurer."];

if(assured > 1){
  bonus = true;
}


if(age < 25 && seniority < 2){
  if(rugged > 0){
    tarif = 4;
  } else tarif = 3;

}else if((age < 25 && seniority > 2) || (age >= 25 && seniority < 2)) {
  if(rugged === 0){
    tarif = 2;
  } else if(rugged === 1){
    tarif = 3;
  } else if(rugged > 1){
    tarif = 4;
  }

}else if(age >= 25 && seniority > 2){
  if(rugged === 0){
    tarif = 1;
  }else if(rugged === 1){
    tarif = 2;
  }else if(rugged === 2){
    tarif = 3;
  }else if(rugged > 2){
    tarif = 4;
  }
  
}

if(bonus){
  if(tarif > 0) tarif--;
}

alert(table[tarif]);
