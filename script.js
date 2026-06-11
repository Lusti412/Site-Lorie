
let historyStack = [];
let step1Text = "";

/* ---------------- NAV ---------------- */

function showPage(id, saveHistory = true) {

  const current = document.querySelector(".page.active");

  if (current && saveHistory) {
    historyStack.push(current.id);
  }

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  renderPage(id);
}

/* ---------------- RENDER ---------------- */

function renderPage(id) {

  const p = CONFIG[id];
  if (!p) return;

  const page = document.getElementById(id);

  const img = page.querySelector("img");
  const text = page.querySelector("p");

  /* IMAGE SAFE */
  if (img) {
    if (p.image) {
      img.style.display = "block";
      img.src = p.image;
    } else {
      img.style.display = "none";
    }
  }

  /* TEXTE */
  if (text && p.text) {
    text.innerText = p.text;
  }

  /* PAGE 1 */
  if (id === "page1") {
    page.querySelector(".btn-yes").innerText = CONFIG.page1.yesText;
    page.querySelector(".btn-no").innerText = CONFIG.page1.noText;
  }

  /* PAGE NON */
  if (id === "pageNon") {
    page.querySelector(".c1").innerText = CONFIG.pageNon.choice1;
    page.querySelector(".c2").innerText = CONFIG.pageNon.choice2;
  }

  /* STEP 2 */
  if (id === "pageOuiStep2") {
    document.getElementById("opt1").innerText = CONFIG.pageOuiStep2.option1;
    document.getElementById("opt2").innerText = CONFIG.pageOuiStep2.option2;
  }

  /* FINAL (🔴 FIX PRINCIPAL) */
  if (id === "finalPage") {
    document.querySelector("#finalPage p").innerText =
      CONFIG.finalPage.text;
  }
}

/* ---------------- BACK ---------------- */

function goBack() {
  if (historyStack.length > 0) {
    const prev = historyStack.pop();
    showPage(prev, false);
  }
}

/* ---------------- ACTIONS ---------------- */

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
    step: "step1",
    texte: step1Text
  });

  showPage("pageOuiStep2");
}

function selectOption(option) {

  sendToSheet({
    step: "step2",
    choix: option,
    texte: step1Text
  });

  showPage("finalPage");
}

/* ---------------- GOOGLE SHEETS FIX ---------------- */

function sendToSheet(data) {
  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(data)
  });
}

/* ---------------- INIT ---------------- */

showPage("page1", false);
