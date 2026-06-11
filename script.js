let selectedChoice = "";

function show(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

// bouton NON normal
function moveNo(btn) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

// envoyer vers Google Sheets
function sendToSheet(data) {
  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

function submitYes() {
  show("pageOui");
}

function submitNo() {
  show("pageNon");
}

function sendStep1() {
  const text = document.getElementById("inputText").value;
  window.step1Text = text;
  show("pageOuiStep2");

  sendToSheet({
    texte: text,
    choix: "step1"
  });
}

function selectOption(opt) {
  sendToSheet({
    texte: window.step1Text,
    choix: opt
  });

  show("finalPage");
}
