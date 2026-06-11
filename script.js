
let history = [];
let savedText = "";

/* NAV */
function show(id) {

  const current = document.querySelector(".page.active");
  if (current) history.push(current.id);

  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  render(id);
}

/* RENDER */
function render(id) {

  const p = CONFIG[id];
  if (!p) return;

  const page = document.getElementById(id);

  const img = page.querySelector("img");
  const text = page.querySelector("p");

  if (img && p.image) img.src = p.image;
  if (text && p.text) text.innerText = p.text;

  if (id === "page1") {
    page.querySelector(".yes").innerText = CONFIG.page1.yes;
    page.querySelector(".no").innerText = CONFIG.page1.no;
  }

  if (id === "pageNon") {
    page.querySelector(".c1").innerText = CONFIG.pageNon.choice1;
    page.querySelector(".c2").innerText = CONFIG.pageNon.choice2;
  }

  if (id === "step2") {
    document.getElementById("t2").innerText = CONFIG.step2.text;
    document.getElementById("o1").innerText = CONFIG.step2.option1;
    document.getElementById("o2").innerText = CONFIG.step2.option2;
  }

  if (id === "final") {
    document.getElementById("finalText").innerText = CONFIG.step2.final;
  }
}

/* BACK */
function back() {
  const prev = history.pop();
  if (prev) show(prev);
}

/* ACTIONS */
function yes() { show("pageOui"); }
function no() { show("pageNon"); }

function sendStep1() {

  savedText = document.getElementById("input").value;

  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    body: JSON.stringify({
      step: "step1",
      texte: savedText,
      choix: ""
    })
  });

  show("step2");
}

function select(opt) {

  fetch(CONFIG.googleScriptURL, {
    method: "POST",
    body: JSON.stringify({
      step: "step2",
      texte: savedText,
      choix: opt
    })
  });

  show("final");
}

/* START */
show("page1");
