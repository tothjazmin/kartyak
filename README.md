<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reszponzív Weboldal</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-JxxAgJNHMU2gupQrWQLQMXcEbvm0SbY5n97RCy1dP10Z6SR0q/LP3qh0VbAPiVRERkYi/2HoIjSYfyz6F4qfGg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #333;
      color: #fff;
      margin: 0;
      padding: 0;
    }
    .header {
      background-color: #444;
      color: white;
      padding: 10px 20px;
      text-align: center;
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
      background-color: #555;
      color: white;
      border-radius: 5px;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1000;
    }
    .toast-close {
      cursor: pointer;
    }
    .responsive-menu {
      background-color: #444;
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
      background-color: #555;
      padding: 10px;
      border-radius: 5px;
      position: absolute;
    }
    .menu li:hover .dropdown-menu {
      display: flex;
    }
    .kartyak {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 60px; /* Space for toast */
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
    .chatbot-container {
      background-color: #444;
      padding: 20px;
      border-radius: 10px;
      margin-top: 20px;
      height: 400px;
      overflow-y: auto;
      border: 1px solid #555;
    }
    .message-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    .user-message, .bot-message {
      background-color: #00aced;
      color: #fff;
      padding: 10px;
      border-radius: 15px;
      max-width: 70%;
      margin: 10px;
    }
    .user-message {
      background-color: #3b5998;
      align-self: flex-start;
    }
    .bot-message {
      align-self: flex-end;
    }
    .todo-list {
      background-color: #444;
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
      todoForm.addEventListener('submit', addTodo);

      function toggleNightMode() {
        document.body.classList.toggle('night-mode');
        if (document.body.classList.contains('night-mode')) {
          toggleNightModeButton.textContent = 'Nappali mód bekapcsolása';
          document.querySelector('.toast').style.backgroundColor = '#777';
          document.querySelector('.responsive-menu').style.backgroundColor = '#555';
          document.querySelectorAll('.flip-card').forEach(card => {
            card.style.backgroundColor = '#666';
          });
          document.querySelector('.todo-list').style.backgroundColor = '#555';
        } else {
          toggleNightModeButton.textContent = 'Éjszakai mód bekapcsolása';
          document.querySelector('.toast').style.backgroundColor = '#555';
          document.querySelector('.responsive-menu').style.backgroundColor = '#444';
          document.querySelectorAll('.flip-card').forEach(card => {
            card.style.backgroundColor = '#fff';
          });
          document.querySelector('.todo-list').style.backgroundColor = '#444';
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
              answer = 'Mátészalkára a Gépészetibe';
              break;
            case 'hanyadikos vagy?':
              answer = '11.-es vagyok';
              break;
            case 'hol laksz?':
              answer = 'Porcsalmán lakom';
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
          chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
        }
      }

      function addTodo(event) {
        event.preventDefault();
        const todoInput = document.querySelector('.todo-input');
        const todoText = todoInput.value.trim();
        if (todoText) {
          const todoItem = document.createElement('div');
          todoItem.classList.add('          todo-item');

          const todoCheckbox = document.createElement('input');
          todoCheckbox.type = 'checkbox';

          const todoLabel = document.createElement('label');
          todoLabel.textContent = todoText;

          todoItem.appendChild(todoCheckbox);
          todoItem.appendChild(todoLabel);
          todoList.appendChild(todoItem);

          todoInput.value = '';
        }
      }
    });
  </script>
</head>
<body>
  <div class="header">
    <h1>Reszponzív Weboldal</h1>
    <div class="toggle-night-mode">Éjszakai mód bekapcsolása</div>
  </div>

  <div class="responsive-menu">
    <div class="menu-icon"><i class="fas fa-bars"></i></div>
    <ul class="menu">
      <li><a href="#">Főoldal</a></li>
      <li><a href="#">Rólunk</a></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle">Szolgáltatások</a>
        <ul class="dropdown-menu">
          <li><a href="https://sites.google.com/view/czuczorokostanc/">Google Sites Link 1</a></li>
          <li><a href="https://sites.google.com/view/czuczorokostanc/">Google Sites Link 2</a></li>
          <li><a href="https://sites.google.com/view/czuczorokostanc/">Google Sites Link 3</a></li>
        </ul>
      </li>
      <li><a href="#">Kapcsolat</a></li>
    </ul>
  </div>

  <div class="toast">
    Üdvözlünk a reszponzív weboldalon!
    <span class="toast-close">&times;</span>
  </div>

  <div class="kartyak">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>Tóth Jázmin Mária</h2>
          <p>Gépészes tanuló</p>
          <p>11.-es</p>
        </div>
        <div class="flip-card-back">
          <h2>Tóth Jázmin Mária</h2>
          <p>Gépészes tanuló</p>
          <p>11.-es</p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>Tóth Jázmin Mária</h2>
          <p>Gépészes tanuló</p>
          <p>11.-es</p>
        </div>
        <div class="flip-card-back">
          <h2>Tóth Jázmin Mária</h2>
          <p>Gépészes tanuló</p>
          <p>11.-es</p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>Tóth Jázmin Mária</h2>
          <p>Gépészes tanuló</p>
          <p>11.-es</p>
        </div>
        <div class="flip-card-back">
          <h2>Tóth Jázmin Mária</h2>
          <p>Gépészes tanuló</p>
          <p>11.-es</p>
        </div>
      </div>
    </div>
  </div>

  <div class="todo-list">
    <h2>To-Do Lista</h2>
    <form class="todo-form">
      <input type="text" class="todo-input" placeholder="Új feladat hozzáadása">
      <button type="submit">Hozzáad</button>
    </form>
    <div class="todo-list-items"></div>
  </div>

  <div class="chatbot-container">
    <h2>AI Chatbot</h2>
    <button class="ai-chatbot-button">Kérdezz tőlem!</button>
  </div>
</body>
</html>

