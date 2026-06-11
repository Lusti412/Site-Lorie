
let step1Text = "";

/* ---------------- NAVIGATION ---------------- */

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* ---------------- PAGE 1 ---------------- */

function goYes() {
  showPage("pageOui");
}

function goNo() {
  showPage("pageNon");
}

/* ---------------- PAGE NON ---------------- */

function goChoice1() {
  showPage("pageNonChoice1");
}

function goChoice2() {
  showPage("pageNonChoice2");
}

function backToNon() {
  showPage("pageNon");
}

/* ---------------- PAGE OUI STEP 1 ---------------- */

function sendStep1() {
  const input = document.getElementById("inputText");
  step1Text = input.value;

  sendToSheet({
    texte: step1Text,
    choix: "step1"
  });

  showPage("pageOuiStep2");
}

/* ---------------- PAGE OUI STEP 2 ---------------- */

function selectOption(option) {

  sendToSheet({
    texte: step1Text,
    choix: option
  });

  showPage("finalPage");
}

/* ---------------- GOOGLE SHEETS ---------------- */

function sendToSheet(data) {
  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
