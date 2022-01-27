var monTableau = [];
let n = prompt("Veuillez entrer le nombre des éléments");
let sum = 0;

for (let i = 0; i < n; i++) {
  monTableau[i] = prompt("entrer l'élément  du tableau");
}
for (i = 0; i < n; i++) {
  console.log(monTableau[i]);
  sum += parseInt(monTableau[i]);
}
console.log("la somme des éléments est : " + sum);
