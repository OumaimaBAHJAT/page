class Etudiant {
  constructor(nom, prenom, age, genre, pays, option, listeDesCours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.listeDesCours = listeDesCours;
  }

  setNom(nom) {
    this.nom = nom;
  }

  setPrenom(prenom) {
    this.prenom = prenom;
  }

  setOption(option) {
    this.option = option;
  }
}

function Inscription(Etudiant) {

let tableau1 = [];
let tableau2 = [];
let tableau3 = [];
let tableau4 = [];
let tableau5 = [];
let tableau6 = [];
if (Etudiant.genre == "femme" && Etudiant.pays == "chine") {
  tableau1.push((Etudiant.nom) + (Etudiant.prenom));
}
if (Etudiant.prenom[Etudiant.prenom.length - 1]== "a") {
  tableau2.push(Etudiant.nom + Etudiant.prenom);
}

if (Etudiant.nom == "") {
  tableau3.push(Etudiant.nom + Etudiant.prenom);
  
  if (Etudiant.pays == "russie" && Etudiant.genre == "homme") {
    tableau4.push(Etudiant.nom + Etudiant.prenom);
    console.log(tableau1)
  }
  if (Etudiant.prenom[0] == "k" && Etudiant.genre == "femme") {
    tableau5.push(Etudiant.nom + Etudiant.prenom);
    if ((Etudiant.prenom[0] = "m" && Etudiant.genre == "homme")) {
      tableau6.push(Etudiant.nom + Etudiant.prenom);
    } else {
      alert("Aucun resultat trouvé");
    }
  }
}
}






