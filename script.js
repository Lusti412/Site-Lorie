// ===== DONNÉES COLLECTÉES =====
let donnees = {
  texte: "",
  choix: ""
};

// ===== INITIALISATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Page 1
  document.getElementById("p1-photo").src   = CONFIG.page1.photo;
  document.getElementById("p1-texte").textContent = CONFIG.page1.texte;
  document.querySelector("#page1 .btn-oui").textContent = CONFIG.page1.boutonOui;
  document.querySelector("#page1 .btn-non").textContent = CONFIG.page1.boutonNon;

  // Page N1
  document.getElementById("pN1-photo").src  = CONFIG.pageN1.photo;
  document.getElementById("pN1-texte").textContent = CONFIG.pageN1.texte;
  document.getElementById("pN1-choix1").textContent = CONFIG.pageN1.choix1;
  document.getElementById("pN1-choix2").textContent = CONFIG.pageN1.choix2;

  // Page N1a
  document.getElementById("pN1a-texte").textContent = CONFIG.pageN1a.texte;

  // Page N1b
  document.getElementById("pN1b-texte").textContent = CONFIG.pageN1b.texte;

  // Page O1
  document.getElementById("pO1-photo").src  = CONFIG.pageO1.photo;
  document.getElementById("pO1-texte").textContent = CONFIG.pageO1.texte;
  document.getElementById("pO1-input").placeholder = CONFIG.pageO1.placeholder;
  document.getElementById("pO1-suivant").textContent = CONFIG.pageO1.boutonSuivant;

  // Page O2
  document.getElementById("pO2-texte").textContent = CONFIG.pageO2.texte;
  document.querySelector("#pageO2 .btn-oui").textContent = CONFIG.pageO2.boutonOui;
  document.querySelector("#pageO2 .btn-non").textContent = CONFIG.pageO2.boutonNon;

  // Page Fin
  document.getElementById("pFin-texte").textContent = CONFIG.pageFin.texte;
});

// ===== NAVIGATION AVEC TRANSITION =====
function aller(cible) {
  const pageActuelle = document.querySelector(".page.active");
  const pageCible = document.getElementById(cible);

  if (!pageCible || pageActuelle === pageCible) return;

  // Sortie de la page actuelle
  pageActuelle.classList.add("sortie");

  setTimeout(() => {
    pageActuelle.classList.remove("active", "sortie");
    pageActuelle.style.display = "none";

    // Entrée de la nouvelle page
    pageCible.style.display = "flex";
    // Force reflow pour déclencher la transition
    void pageCible.offsetWidth;
    pageCible.classList.add("active");
  }, 350);
}

// ===== VALIDER PAGE O1 (saisie texte) =====
function validerO1() {
  const input = document.getElementById("pO1-input").value.trim();
  if (!input) {
    document.getElementById("pO1-input").style.borderColor = "#e8789e";
    document.getElementById("pO1-input").focus();
    return;
  }
  donnees.texte = input;
  aller("pageO2");
}

// ===== VALIDER PAGE O2 (choix final) + ENVOI SHEETS =====
function validerFin(choix) {
  donnees.choix = choix;
  envoyerDonnees();
  aller("pageFin");
}

// ===== ENVOI VERS GOOGLE SHEETS =====
function envoyerDonnees() {
  fetch(CONFIG.appsScriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      texte: donnees.texte,
      choix: donnees.choix
    })
  }).catch(err => {
    console.error("Erreur envoi :", err);
  });
}
