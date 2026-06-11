
let step1Text = "";

/* ---------------------------
   NAVIGATION ENTRE PAGES
---------------------------- */

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* ---------------------------
   PAGE 1
---------------------------- */

function goYes() {
  showPage("pageOui");
}

function goNo() {
  showPage("pageNon");
}

/* ---------------------------
   PAGE NON (BRANCHE NON)
---------------------------- */

function goNonChoice1() {
  showPage("pageNonChoice1");
}

function goNonChoice2() {
  showPage("pageNonChoice2");
}

function backToNon() {
  showPage("pageNon");
}

/* ---------------------------
   PAGE OUI - ÉTAPE 1
---------------------------- */

function sendStep1() {
  const input = document.getElementById("inputText");
  step1Text = input.value;

  sendToSheet({
    texte: step1Text,
    choix: "step1"
  });

  showPage("pageOuiStep2");
}

/* ---------------------------
   PAGE OUI - ÉTAPE 2
---------------------------- */

function selectOption(option) {

  sendToSheet({
    texte: step1Text,
    choix: option
  });

  showPage("finalPage");
}

/* ---------------------------
   GOOGLE SHEETS
---------------------------- */

function sendToSheet(data) {
  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).catch(err => console.log(err));
}
