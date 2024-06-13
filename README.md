<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reszponzív Weboldal</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #ffb6c1; /* rózsaszín háttér */
      color: #333; /* alap szövegszín */
      transition: background-color 0.3s ease;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .night-mode-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      cursor: pointer;
      padding: 10px;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .header {
      background-color: #333;
      color: white;
      width: 100%;
      padding: 20px 0;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 2em;
    }

    .toast {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(255, 182, 193, 0.9); /* félig átlátszó rózsaszín */
      color: #333;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      display: none;
    }

    .toast.show {
      display: block;
    }

    .toast-close {
      float: right;
      cursor: pointer;
      font-weight: bold;
    }

    .responsive-menu {
      margin-top: 20px;
      width: 100%;
      max-width: 600px;
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    .menu {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    .menu li {
      margin: 0 10px;
    }

    .menu a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.3s ease;
    }

    .menu a:hover {
      color: #ffb6c1; /* rózsaszín hover */
    }

    .menu .dropdown {
      position: relative;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      display: none;
    }

    .dropdown-menu.show {
      display: block;
    }

    .dropdown-menu li {
      padding: 10px;
    }

    .dropdown-menu li a {
      color: #333;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .dropdown-menu li a:hover {
      color: #ffb6c1; /* rózsaszín hover */
    }

    .flip-card {
      background-color: transparent;
      width: 300px;
      height: 200px;
      margin: 20px;
      perspective: 1000px;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      border-radius: 10px;
    }

    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 10px;
    }

    .flip-card-front {
      background-color: #fff;
    }

    .flip-card-back {
      background-color: #fff;
      transform: rotateY(180deg);
    }

    .flip-card-back p {
      margin: 5px 0;
    }

    .flip-card-back button {
      background-color: #ffb6c1; /* rózsaszín gomb */
      color: #fff;
      border: none;
      padding: 10px 20px;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .flip-card-back button:hover {
      background-color: #333; /* sötét rózsaszín */
    }

    .todo-list {
      width: 100%;
      max-width: 600px;
      margin-top: 20px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    .todo-list h2 {
      margin-top: 0;
    }

    .todo-form {
      display: flex;
      margin-bottom: 10px;
    }

    .todo-input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .todo-form button {
      background-color: #ffb6c1; /* rózsaszín gomb */
      color: #fff;
      border: none;
      padding: 10px 20px;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .todo-form button:hover {
      background-color: #333; /* sötét rózsaszín */
    }

    .todo-item {
      margin-bottom: 10px;
    }

    .todo-item label {
      margin-left: 10px;
    }

    .chatbot-container {
      width: 100%;
      max-width: 600px;
      margin-top: 20px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    .chatbot-container h2 {
      margin-top: 0;
    }

    .chatbot-container button {
      background-color: #ffb6c1; /* rózsaszín gomb */
      color: #fff;
      border: none;
      padding: 10px 20px;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .chatbot-container button:hover {
      background-color: #333; /* sötét rózsaszín */
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Reszponzív Weboldal</h1>
    <button class="night-mode-toggle">Éjszakai mód</button>
  </div>

  <div class="toast">
    Tóth Jázmin Mária 11.-es tanuló
    <span class="toast-close">&times;</span>
  </div>

  <div class="responsive-menu">
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

  <div class="kartyak">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
                     <h3>Tóth Jázmin Mária Gépészes tanuló 11. évfolyam</h3>
        </div>
        <div class="flip-card-back">
          <p>Tóth Jázmin Mária Gépészes tanuló vagyok a 11. évfolyamból.</p>
          <button><a href="https://sites.google.com/view/czuczorokostanc/" target="_blank">Google Sites Link</a></button>
        </div>
      </div>
    </div>

    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>Tóth Jázmin Mária Gépészes tanuló 11. évfolyam</h3>
        </div>
        <div class="flip-card-back">
          <p>Tóth Jázmin Mária Gépészes tanuló vagyok a 11. évfolyamból.</p>
          <button><a href="https://sites.google.com/view/czuczorokostanc/" target="_blank">Google Sites Link</a></button>
        </div>
      </div>
    </div>

    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>Tóth Jázmin Mária Gépészes tanuló 11. évfolyam</h3>
        </div>
        <div class="flip-card-back">
          <p>Tóth Jázmin Mária Gépészes tanuló vagyok a 11. évfolyamból.</p>
          <button><a href="https://sites.google.com/view/czuczorokostanc/" target="_blank">Google Sites Link</a></button>
        </div>
      </div>
    </div>
  </div>

  <div class="chatbot-container">
    <h2>AI Chatbot - Üzenetek</h2>
    <div id="chat-container">
      <div class="chat-message user-message">
        <p>Halló! Mi az aktuális idő?</p>
      </div>
      <div class="chat-message bot-message">
        <p>Most 14:30 van.</p>
      </div>
      <!-- További chat üzenetek ide -->
    </div>
    <div class="chat-input">
      <input type="text" id="user-input" placeholder="Írj üzenetet...">
      <button id="send-button">Küldés</button>
    </div>
  </div>

  <script>
    const nightModeToggle = document.querySelector('.night-mode-toggle');
    const body = document.body;
    const toast = document.querySelector('.toast');
    const toastClose = document.querySelector('.toast .toast-close');
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Éjszakai mód kapcsoló kezelése
    nightModeToggle.addEventListener('click', () => {
      body.classList.toggle('night-mode');
    });

    // Toast üzenet kezelése
    toastClose.addEventListener('click', () => {
      toast.classList.remove('show');
    });

    // Chatbot küldése gomb kezelése (dummy)
    sendButton.addEventListener('click', () => {
      const userMessage = userInput.value.trim();
      if (userMessage === '') return;
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('chat-message', 'user-message');
      userMessageElement.innerHTML = `<p>${userMessage}</p>`;
      chatContainer.appendChild(userMessageElement);
      userInput.value = '';

      // Dummy válasz a chatbottól
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('chat-message', 'bot-message');
      botMessageElement.innerHTML = '<p>Kérem várjon, válasz készítés alatt...</p>';
      chatContainer.appendChild(botMessageElement);

      // Dummy válasz késleltetett megjelenítése
      setTimeout(() => {
        botMessageElement.innerHTML = '<p>Elnézést, jelenleg nem értem. Kérem próbálja újra később.</p>';
      }, 1500);
    });
  </script>
</body>
</html>

