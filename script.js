
let historyStack = [];
let step1Text = "";
let selectedOption = "";

/* ---------------- NAVIGATION ---------------- */

function showPage(id, saveHistory = true) {

  const current = document.querySelector(".page.active");

  if (current && saveHistory) {
    historyStack.push(current.id);
  }

  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  const page = document.getElementById(id);
  page.classList.add("active");

  renderPage(id);
}

/* ---------------- RENDER ---------------- */

function renderPage(id) {

  const p = CONFIG[id];
  if (!p) return;

  const page = document.getElementById(id);

  const img = page.querySelector("img");
  const text = page.querySelector("p");

  if (img) {
    if (p.image) {
      img.style.display = "block";
      img.src = p.image;
    } else {
      img.style.display = "none";
    }
  }

  if (text && p.text) {
    text.innerText = p.text;
  }

  /* PAGE 1 */
  if (id === "page1") {
    page.querySelector(".btn-yes").innerText = p.yesText;
    page.querySelector(".btn-no").innerText = p.noText;
  }

  /* PAGE NON */
  if (id === "pageNon") {
    page.querySelector(".c1").innerText = p.choice1;
    page.querySelector(".c2").innerText = p.choice2;
  }

  /* STEP 2 OUI */
  if (id === "pageOuiStep2") {
    document.getElementById("step2Text").innerText =
      CONFIG.pageOuiStep2.text;

    document.getElementById("opt1").innerText =
      "☐ " + CONFIG.pageOuiStep2.option1;

    document.getElementById("opt2").innerText =
      "☐ " + CONFIG.pageOuiStep2.option2;
  }

  /* FINAL */
  if (id === "finalPage") {
    page.querySelector("p").innerText =
      CONFIG.pageOuiStep2.finalText;
  }
}

/* ---------------- BACK ---------------- */

function goBack() {
  if (historyStack.length > 0) {
    const prev = historyStack.pop();
    showPage(prev, false);
  }
}

/* ---------------- PAGE 1 ACTIONS ---------------- */

function goYes() {
  showPage("pageOui");
}

function goNo() {
  showPage("pageNon");
}

function goChoice1() {
  showPage("pageNonChoice1");
}

function goChoice2() {
  showPage("pageNonChoice2");
}

/* ---------------- OUI FLOW ---------------- */

function sendStep1() {

  step1Text = document.getElementById("inputText").value;

  sendToSheet({
    texte: step1Text,
    choix: "step1"
  });

  showPage("pageOuiStep2");
}

function selectOption(option) {

  selectedOption = option;

  sendToSheet({
    texte: step1Text,
    choix: option
  });

  showPage("finalPage");
}

/* ---------------- SHEETS ---------------- */

function sendToSheet(data) {
  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

/* ---------------- INIT ---------------- */

showPage("page1", false);
