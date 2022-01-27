var monTableau = [];
var monTableau2 = [];
var monTableau3 = [];
let n = prompt("Veuillez entrer le nombre des éléments ");

for (let i = 0; i < n; i++) {
  monTableau[i] = prompt("entrer l'élément du tableau");
}
for (let i = 0; i < n; i++) {
  monTableau2[i] = prompt("entrer l'élément du tableu");
}
for (let i = 0; i < n; i++) {
  monTableau3[i] = parseInt(monTableau[i]) + parseInt(monTableau2[i]);
  console.log(
    monTableau3[i] + "(" + monTableau[i] + "+" + monTableau2[i] + ")"
  );
}
