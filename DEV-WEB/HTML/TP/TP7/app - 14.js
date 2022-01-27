var monTableau = [];
let n = prompt("Veuillez entrer la valeur de n ");
let plusPetit;
let plusGrand;

for (let i = 0; i < n; i++) {
  monTableau[i] = prompt("entrer l'element du tableu");
}
for (i = 0; i < n; i++) {
  console.log(monTableau[i]);
}
plusPetit = monTableau[0];
plusGrand = monTableau[0];
for (i = 0; i < n; i++) {
  if (monTableau[i] <= plusPetit) {
    plusPetit = monTableau[i];
  }
  if (monTableau[i] >= plusGrand) {
    plusGrand = monTableau[i];
  }
}

console.log("le plus petit élément est " + plusPetit);
console.log("le plus grand élément est " + plusGrand);
