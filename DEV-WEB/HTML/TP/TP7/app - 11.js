let premierNombre = prompt("Veuillez entrer le premier nombre");
let dernierrNombre = prompt("Veuillez entrer le dernier nombre");
let premierNombreMultiplier = prompt("Veuillez entrer le premier nombre à multiplier");
let dernierNombreMultiplier = prompt("Veuillez entrer le dernier nombre à multiplier");

for (let i = premierNombre; i <= dernierrNombre; i++) {
  for (let n = premierNombreMultiplier; n <= dernierNombreMultiplier; n++) {
    console.log(i + " x " + n + " = " + n * i);
  }
}
