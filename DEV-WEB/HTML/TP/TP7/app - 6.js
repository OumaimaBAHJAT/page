let n = prompt("Veuillez entrer un nombre compris entre 1 et 3");

while (n < 1 || n > 3) {
  alert(" Réssayer ");
  n = prompt("Veuillez entrer un nombre compris entre 1 et 3");
}

alert(" Bravo!!!");
