<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Select Board | Agniphy</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="navbar">
    <h1 class="logo">Agniphy</h1>
    <button class="btn-secondary" onclick="logoutUser()">Logout</button>
  </header>

  <section class="section">
    <h2>Select Your Education Board</h2>
    <div class="board-selection">
      <div class="board-card" onclick="selectBoard('CBSE')">CBSE</div>
      <div class="board-card" onclick="selectBoard('ICSE')">ICSE</div>
      <div class="board-card" onclick="selectBoard('WBCHSE')">WBCHSE</div>
      <div class="board-card" onclick="selectBoard('State Board')">State Board</div>
    </div>
  </section>

  <script type="module" src="script.js"></script>
  <script src="boards.js"></script>
</body>
</html>
