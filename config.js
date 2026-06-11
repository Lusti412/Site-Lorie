<!DOCTYPE html>
<html>
<head>
  <title>Date</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- PAGE 1 -->
<div id="page1" class="page active">
  <img src="img1.jpg">
  <p>TON TEXTE PAGE 1</p>

  <button class="btn-yes" onclick="submitYes()">Oui</button>
  <button class="btn-no" id="noBtn" onmouseover="moveNo(this)" onclick="submitNo()">Non</button>
</div>

<!-- PAGE NON -->
<div id="pageNon" class="page">
  <img src="img2.jpg">
  <p>TON TEXTE PAGE NON</p>

  <button onclick="show('pageNon1')">Choix 1</button>
  <button onclick="show('pageNon2')">Choix 2</button>
</div>

<!-- PAGE OUI -->
<div id="pageOui" class="page">
  <img src="img3.jpg">
  <p>TON TEXTE PAGE OUI</p>

  <input id="inputText" placeholder="Écris ici">
  <button onclick="sendStep1()">Suivant</button>
</div>

<!-- STEP 2 -->
<div id="pageOuiStep2" class="page">
  <p>Choisis une option</p>

  <button onclick="selectOption('A')">Option A</button>
  <button onclick="selectOption('B')">Option B</button>
</div>

<!-- FINAL -->
<div id="finalPage" class="page">
  <p>Texte final</p>
</div>

<script src="config.js"></script>
<script src="script.js"></script>

</body>
</html>
