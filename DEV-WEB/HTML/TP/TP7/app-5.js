let emailUtilisateur = prompt("entrer email1:");
let motPasseUtilisateur = prompt("entrer mot de passe1:");
let emailEssai;
let motPasseEssai;
let n = 1;
while (
  (emailUtilisateur !== emailEssai || motPasseUtilisateur !== motPasseEssai) &&
  n <= 5
) {
  emailEssai = prompt("entrer email2:");
  motPasseEssai = prompt("entrer mot de passe2:");
  if (
    (emailUtilisateur !== emailEssai ||
      motPasseUtilisateur !== motPasseEssai) &&
    n == 5
  ) {
    alert(
      "Vous avez saisi des mauvais identifiants" +
        " " +
        n +
        " " +
        "fois, votre compte est bloqué"
    );
  } else if (
    (emailUtilisateur !== emailEssai ||
      motPasseUtilisateur !== motPasseEssai) &&
    n < 5
  ) {
    alert("Identifiants incorrect");
  } else if (
    emailUtilisateur === emailEssai &&
    motPasseUtilisateur === motPasseEssai &&
    n <= 5
  ) {
    alert("Bienvenu dans votre espace client");
  }
  n += 1;
}
