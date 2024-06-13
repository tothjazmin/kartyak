<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kártyák</title>
  <link href="kartya.css" rel="stylesheet">
    
  <script>
    const chatbotAnswers = {
      "Hogy hívnak?": "Tóth Jázmin Mária",
      "Hány éves vagy?": "17",
      "Melyik iskolába jársz?": "Mátészalka Gépészeti Informatika szak",
      "Hova valósi vagy?": "Porcsalma"
    };

    function askQuestion() {
      const question = document.getElementById('chatInput').value;
      const chatOutput = document.getElementById('chatOutput');
      const newQuestion = document.createElement('div');
      const newAnswer = document.createElement('div');
      newQuestion.className = 'chat-message user-message';
      newAnswer.className = 'chat-message bot-message';
      newQuestion.innerText = question;

      chatOutput.appendChild(newQuestion);
      if (question in chatbotAnswers) {
        newAnswer.innerText = chatbotAnswers[question];
      } else {
        newAnswer.innerText = "Ez a kérdésre még nem tudok válaszolni.";
      }
      chatOutput.appendChild(newAnswer);
      chatOutput.scrollTop = chatOutput.scrollHeight;
      document.getElementById('chatInput').value = '';
    }

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerText = taskInput.value;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }

    document.addEventListener('DOMContentLoaded', () => {
      const toggleNightModeButton = document.querySelector('.toggle-night-mode');
      const closeButton = document.querySelector('.toast-close');

      toggleNightModeButton.addEventListener('click', toggleNightMode);
      closeButton.addEventListener('click', () => {
        document.querySelector('.toast').style.display = 'none';
      });

      function toggleNightMode() {
        document.body.classList.toggle('night-mode');
        toggleNightModeButton.textContent = document.body.classList.contains('night-mode')
          ? 'Éjszakai mód kikapcsolása'
          : 'Éjszakai mód bekapcsolása';
      }
    });
  </script>
</head>
<body>
  <button class="toggle-night-mode">Éjszakai mód bekapcsolása</button>

  <div class="toast">
    <div class="toast-content">
      <i class="toast-icon fas fa-info-circle"></i>
      <h1>Tóth Jázmin Mária vagyok</h1>
      <p class="toast-message">Mátészalkán tanulok az Informatika szakon a Gépészetiben</p>
      <p>11.-es vagyok</p>
    </div>
    <span class="toast-close">&times;</span>
  </div>

  <nav class="responsive-menu">
    <div class="menu-icon" onclick="toggleMenu()">☰</div>
    <ul class="menu">
      <li><a href="#home">Főoldal</a></li>
      <li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Rólam</a></li>
      <li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Google Sites Oldalam</a></li>
      <li>
        <a href="#" class="dropdown-toggle">Linkek</a>
        <ul class="dropdown-menu">
          <li><a href="https://sites.google.com/view/ita-tjm10b/digikult">Digikult</a></li>
          <li><a href="https://sites.google.com/view/ita-tjm10b/projekt">Projekt</a></li>
          <li
