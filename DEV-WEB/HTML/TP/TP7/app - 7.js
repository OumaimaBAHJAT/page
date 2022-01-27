let i = prompt("Veuillez entrer un nombre compris entre 10 et 20");

while (i < 10 || i > 20) {
  if (i < 10) {
    alert(" Plus grand !");
  } else if (i > 20) {
    alert(" Plus petit !");
  }
  i = prompt("Veuillez entrer un nombre compris entre 10 et 20");
}
alert(" Bravo!!!");
