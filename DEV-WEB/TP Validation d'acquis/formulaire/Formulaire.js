window.onload = function () {
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }
};

const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const etudes = document.querySelector("#etudes");
const bio = document.querySelector("#bio");
const btnSubmit = document.querySelector("#btnSubmit");

// Err fields
const errNom = document.querySelector("#err_nom");
const errPrenom = document.querySelector("#err_prenom");
const errEmail = document.querySelector("#err_email");
const errEtudes = document.querySelector("#err_etudes");
const errBio = document.querySelector("#err_bio");

// table list
const listedesstagiaire = document.querySelector("#listedesstagiaire");

btnSubmit.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log("nom : ", nom.value);
  console.log("prenom : ", prenom.value);
  console.log("email : ", email.value);
  console.log("etudes : ", etudes.value);
  console.log("bio : ", bio.value);

  if (nom.value === "") {
    errNom.innerText = "Veuillez saisir le nom";
    errNom.classList.add("err");
  } else {
    errNom.innerText = "";
    errNom.classList.remove("err");
  }

  if (prenom.value === "") {
    errPrenom.innerText = "Veuillez saisir le prenom";
    errPrenom.classList.add("err");
  } else {
    errPrenom.innerText = "";
    errPrenom.classList.remove("err");
  }

  if (email.value === "") {
    errEmail.innerText = "Veuillez saisir l'adresse email";
    errEmail.classList.add("err");
  } else {
    errEmail.innerText = "";
    errEmail.classList.remove("err");
  }
  if (etudes.value === "") {
    errEtudes.innerText = "Veuillez choisir vos études";
    errEtudes.classList.add("err");
  } else {
    errEtudes.innerText = "";
    errEtudes.classList.remove("err");
  }
  if (bio.value === "") {
    errBio.innerText = "Veuillez saisir l'adresse email";
    errBio.classList.add("err");
  } else {
    errBio.innerText = "";
    errBio.classList.remove("err");
  } }

  if (
    nom.value !== "" &&
    prenom.value !== "" &&
    email.value !== "" &&
    etudes.value !== "" &&
    bio.value !== ""
  ) {
    listedesstagiaire.innerHTML += `<tr><td>${nom.value}</td><td>${prenom.value}</td><td>${email.value}</td><td>${action.value}</td></tr>`;


    const columnAction = document.createElement("td");

    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerText = "Supprimer";
    boutonSupprimer.addEventListener("click", function () {
      // dataRow.remove();
      this.parentElement.parentElement.remove();
    });

    columnAction.appendChild(boutonSupprimer);

    // appendChild : Ajoute un seul enfant
    // dataRow.appendChild(columnNom);
    // dataRow.appendChild(columnPrenom);
    // dataRow.appendChild(columnEmail);
    // dataRow.appendChild(columnAction);

    // append : Ajouter plusieurs enfant
    dataRow.append(columnNom, columnPrenom, columnEmail, columnAction);
    listeUtilisateurs.appendChild(dataRow);
    //vider tous les champs
    const formData = {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
    };

    const data = JSON.parse(localStorage.getItem("data"));
    data.push(formData);
    localStorage.setItem("data", JSON.stringify(data));
    nom.value = "";
    prenom.value = "";
    email.value = "";
  }

