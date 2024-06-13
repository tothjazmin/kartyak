<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weboldal</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="kartya.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-JxxAgJNHMU2gupQrWQLQMXcEbvm0SbY5n97RCy1dP10Z6SR0q/LP3qh0VbAPiVRERkYi/2HoIjSYfyz6F4qfGg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: pink;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .toggle-night-mode {
      margin: 10px;
      padding: 10px;
      background-color: #fff;
      border: 1px solid #333;
      cursor: pointer;
      border-radius: 5px;
    }
    .toast {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: #333;
      color: white;
      border-radius: 5px;
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 1000;
    }
    .toast-close {
      cursor: pointer;
    }
    .responsive-menu {
      background-color: #333;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .menu {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .menu-icon {
      font-size: 30px;
      cursor: pointer;
      color: white;
      padding: 10px;
    }
    .menu li {
      margin: 0 10px;
    }
    .menu a {
      color: white;
      text-decoration: none;
    }
    .dropdown-toggle::after {
      content: ' ▼';
    }
    .dropdown-menu {
      display: none;
      flex-direction: column;
      background-color: #444;
      padding: 10px;
      border-radius: 5px;
    }
    .menu li:hover .dropdown-menu {
      display: flex;
    }
    .kartyak {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 150px;
    }
    .flip-card {
      background-color: #fff;
      width: 300px;
      height: 400px;
      perspective: 1000px;
      margin: 10px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
    .night-mode {
      background-color: #333;
      color: #fff;
    }
    .chatbot-container {
      background-color: #f0f0f0;
      padding: 20px;
      border-radius: 10px;
      margin-top: 20px;
      height: 300px;
      overflow-y: auto;
      border: 1px solid #ccc;
    }
    .message-container {
      margin-bottom: 10px;
    }
    .user-message {
      background-color: #3b5998;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      
max-width: 70%;
      align-self: flex-start;
      margin-right: auto;
      margin-left: 10px;
    }
    .bot-message {
      background-color: #00aced;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      max-width: 70%;
      align-self: flex-end;
      margin-left: auto;
      margin-right: 10px;
    }
    .todo-list {
      background-color: #333;
      padding: 20px;
      border-radius: 10px;
      margin-top: 20px;
      color: #fff;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .todo-form {
      display: flex;
      margin-bottom: 10px;
    }
    .todo-input {
      flex: 1;
      padding: 8px;
      font-size: 16px;
      margin-right: 10px;
    }
    .todo-item {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      font-size: 16px;
    }
    .todo-item input {
      margin-right: 10px;
    }
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const toggleNightModeButton = document.querySelector('.toggle-night-mode');
      const closeButton = document.querySelector('.toast-close');
      const chatbotButton = document.querySelector('.ai-chatbot-button');
      const todoForm = document.querySelector('.todo-form');
      const todoList = document.querySelector('.todo-list-items');
      const chatbotContainer = document.querySelector('.chatbot-container');
      toggleNightModeButton.addEventListener('click', toggleNightMode);
      closeButton.addEventListener('click', () => {
        document.querySelector('.toast').style.display = 'none';
      });
      chatbotButton.addEventListener('click', openChatbot);
      function toggleNightMode() {
        document.body.classList.toggle('night-mode');
        if (document.body.classList.contains('night-mode')) {
          toggleNightModeButton.textContent = 'Éjszakai mód kikapcsolása';
          document.querySelector('.toast').style.backgroundColor = '#555';
          document.querySelector('.responsive-menu').style.backgroundColor = '#555';
          document.querySelectorAll('.flip-card').forEach(card => {
            card.style.backgroundColor = '#666';
          });
          document.querySelector('.todo-list').style.backgroundColor = '#444';
        } else {
          toggleNightModeButton.textContent = 'Éjszakai mód bekapcsolása';
          document.querySelector('.toast').style.backgroundColor = '#444';
          document.querySelector('.responsive-menu').style.backgroundColor = '#444';
          document.querySelectorAll('.flip-card').forEach(card => {
            card.style.backgroundColor = '#f9f9f9';
          });
          document.querySelector('.todo-list').style.backgroundColor = '#333';
        }
      }
      function openChatbot() {
        const question = prompt('Kérdezz tőlem bármit a következő témákban:\n\n- Hány éves vagy?\n- Hogy hívnak?\n- Hova jársz iskolába?\n- Hanyadikos vagy?\n- Hol laksz?');
        if (question) {
          let answer;
          switch (question.toLowerCase()) {
            case 'hány éves vagy?':
              answer = '17';
              break;
            case 'hogy hívnak?':
              answer = 'Tóth Jázmin Mária';
              break;
            case 'hova jársz iskolába?':
              answer = 'Mátészalkán tanulok az Informatika szakon a Gépészetiben.';
              break;
            case 'hanyadikos vagy?':
              answer = '11.-es vagyok.';
              break;
            case 'hol laksz?':
              answer = 'Mátészalkán lakom.';
              break;
            default:
              answer = 'Nem tudok válaszolni erre a kérdésre.';
          }
          const messageContainer = document.createElement('div');
          messageContainer.classList.add('message-container');
          const userMessage = document.createElement('div');
          userMessage.classList.add('user-message');
          userMessage.textContent = question;
          const botMessage = document.createElement('div');
          botMessage.classList.add('bot-message');
          botMessage.textContent = answer;
          messageContainer.appendChild(userMessage);
          messageContainer.appendChild(botMessage);
          chatbotContainer.appendChild(messageContainer);
        }
      }
      todoForm.addEventListener('submit', addTodo);
      function addTodo(event) {
        event.preventDefault();
        const todoItem = document.querySelector('.todo-input').value.trim();
        if (todoItem !== '') {
          const todoElement = document.createElement('div');
          todoElement.classList.add('todo-item');
          todoElement.innerHTML =             <input type="checkbox">             <span>${todoItem}</span>           ;
          todoList.appendChild(todoElement);
          document.querySelector('.todo-input').value = '';
        }
      }
    });
  </script>

</head>
<body>
<div class="toast">
  <div class="toast-content">
    <i class="toast-icon fas fa-info-circle"></i>
    <h1>Tóth Jázmin Mária vagyok</h1>
    <p class="toast-message">Mátészalkán tanulok az Informatika szakon a Gépészetiben.</p>
    <p>11.-es vagyok.</p>
  </div>
  <span class="toast-close">&times;</span>
</div>
<nav class="responsive-menu">
  <div>
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-icon">&#9776;</label>
    <ul class="menu">
      <li><a href="#home">Főoldal</a></li>
      
html
Kód másolása
<li><a href="#about">Rólam</a></li>
<li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Google Sites Oldalam</a></li>
<li class="dropdown-toggle">
  <span>Feladatlista</span>
  <ul class="dropdown-menu">
    <li><a href="https://sites.google.com/view/ita-tjm10b/digikult">Digikult</a></li>
    <li><a href="https://sites.google.com/view/ita-tjm10b/projekt">Projekt</a></li>
    <li><a href="https://sites.google.com/view/ita-tjm10b/python">Python</a></li>
    <li><a href="https://sites.google.com/view/ita-tjm10b/web">Web</a></li>
    <li><a href="https://sites.google.com/view/ita-tjm10b/h%C3%A1l%C3%B3zat">Hálózat</a></li>
  </ul>
</li>
<li><button class="ai-chatbot-button">AI Chatbot</button></li>
</ul>
</div>
<button class="toggle-night-mode">Éjszakai mód bekapcsolása</button>
</nav>
<div class="kartyak">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="namjoon.jpg" alt="Kim Namjoon" class="card-img">
      <h1 style="color: #333;">Tóth Jázmin Mária</h1>
      <h3 style="color: #333;">Mátészalkán tanulok az Informatika szakon a Gépészetiben</h3>
      <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
    </div>
    <div class="flip-card-back">
      <h1 style="color: #333;">Tóth Jázmin Mária</h1>
      <p style="color: #333;">Mátészalkán tanulok az Informatika szakon a Gépészetiben</p>
      <p style="color: #333;">11.-es vagyok</p>
      <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="jin.jpg" alt="Kim Seokjin" class="card-img">
      <h1 style="color: #333;">Tóth Jázmin Mária</h1>
      <h3 style="color: #333;">Mátészalkán tanulok az Informatika szakon a Gépészetiben</h3>
      <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
    </div>
    <div class="flip-card-back">
      <h1 style="color: #333;">Tóth Jázmin Mária</h1>
      <p style="color: #333;">Mátészalkán tanulok az Informatika szakon a Gépészetiben</p>
      <p style="color: #333;">11.-es vagyok</p>
      <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="yoongi.jpg" alt="Min Yoongi" class="card-img">
      <h1 style="color: #333;">Tóth Jázmin Mária</h1>
      <h3 style="color: #333;">Mátészalkán tanulok az Informatika szakon a Gépészetiben</h3>
      <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
    </div>
    <div class="flip-card-back">
      <h1 style="color: #333;">Tóth Jázmin Mária</h1>
      <p style="color: #333;">Mátészalkán tanulok az Informatika szakon a Gépészetiben</p>
      <p style="color: #333;">11.-es vagyok</p>
      <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
    </div>
  </div>
</div>
</div>
<div class="chatbot-container">
  <h2 style="text-align: center; margin-bottom: 10px;">AI Chatbot</h2>
  <div class="message-container">
    <div class="bot-message">
      <p>Szia! Kérdezz tőlem bármit a következő témákban:</p>
      <ul>
        <li>- Hány éves vagy?</li>
        <li>- Hogy hívnak?</li>
        <li>- Hova jársz iskolába?</li>
        <li>- Hanyadikos vagy?</li>
        <li>- Hol laksz?</li>
      </ul>
    </div>
  </div>
</div>
<div class="todo-list">
  <h2 style="text-align: center; color: #fff; margin-bottom: 10px;">To Do lista</h2>
  <form class="todo-form">
    <input type="text" class="todo-input" placeholder="Új feladat...">
    <button type="submit" class="todo-button">+</button>
  </form>
  <div class="todo-list-items"></div>
</div>
</body>
</html>
