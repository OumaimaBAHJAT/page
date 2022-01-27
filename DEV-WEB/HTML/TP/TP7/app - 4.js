const email1 = prompt("entrer email1:");
const motPasse1 = prompt("entrer mot de passe1:");
const email2 = prompt("entrer email2:");
const motPasse2 = prompt("entrer mot de passe2:");
if (email1 === email2 && motPasse1 === motPasse2) {
  alert("Bienvenu dans votre espace client");
} else {
  alert("Identifiants incorrect ");
}
