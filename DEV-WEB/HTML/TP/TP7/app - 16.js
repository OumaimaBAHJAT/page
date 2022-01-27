let n = prompt("Veuillez entrer un nombre");
let matrice = [];
let sousMatrice =[];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    matrice[i](sousMatrice[j]) = prompt("entrer l'element du tableu");
    console.log(matrice[i][j]);
  }
}
