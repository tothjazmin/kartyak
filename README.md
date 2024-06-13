<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projekt a 1mükra számára</title>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.night-mode {
  background-color: #333;
  color: #fff;
}

.night-mode .responsive-menu {
  background-color: #555;
}

.night-mode .flip-card {
  background-color: #666;
}

.night-mode .todo-list {
  background-color: #444;
}

.responsive-menu {
  background-color: #444;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.menu li {
  float: left;
}

.menu li a {
  display: block;
  padding: 14px 16px;
  text-decoration: none;
  color: #fff;
}

.menu li a:hover {
  background-color: #555;
}

.dropdown-toggle {
  position: relative;
}

.dropdown-toggle .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #444;
  border-radius: 5px;
  z-index: 1000;
}

.dropdown-toggle:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li a {
  color: #fff;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #555;
}

.toggle-night-mode {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px;
  background-color: #444;
  color: #fff;
  border: none;
  cursor: pointer;
}

.kartyak {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
}

.flip-card {
  background-color: #f9f9f9;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  transition: background-color 0.3s ease;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-button {
  display: block;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.chatbot-container {
  max-width: 600px;
  margin: auto;
  margin-top: 50px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.message-container {
  display: flex;
  margin-bottom: 10px;
}

.user-message {
  background-color: #00aced;
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
  transition: background-color 0.3s ease;
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
  const chatbotButton = document.querySelector('.ai-chatbot-button');
  const todoForm = document.querySelector('.todo-form');
  const todoList = document.querySelector('.todo-list');

  toggleNightModeButton.addEventListener('click', toggleNightMode);

  function toggleNightMode() {
    document.body.classList.toggle('night-mode');
    if (document.body.classList.contains('night-mode')) {
      toggleNightModeButton.textContent = 'Éjszakai mód kikapcsolása';
    } else {
      toggleNightModeButton.textContent = 'Éjszakai mód bekapcsolása';
    }
  }

  chatbotButton.addEventListener('click', openChatbot);

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
    const todoInput = document.querySelector('.todo-input');
    const todoItem = todoInput.value.trim();
    if (todoItem !== '') {
      const todoElement = document.createElement('div');
      todoElement.classList.add('todo-item');
      todoElement.innerHTML = `
        <input type="checkbox">
        <span>${todoItem}</span>
      `;
      todoList.appendChild(todoElement);
      todoInput.value = '';
    }
  }
});
</script>
</head>
<body>
  <div class="responsive-menu">
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button class="toggle-night-mode">Éjszakai mód bekapcsolása</button>
  </div>

  <div class="kartyak">
    <div class="flip-card">
            <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="your-image.jpg" alt="Image" class="card-img">
          <h2>Card Front</h2>
        </div>
        <div class="flip-card-back">
          <h2>Card Back</h2>
          <a href="#" class="card-button">Button</a>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="your-image.jpg" alt="Image" class="card-img">
          <h2>Card Front</h2>
        </div>
        <div class="flip-card-back">
          <h2>Card Back</h2>
          <a href="#" class="card-button">Button</a>
        </div>
      </div>
    </div>
  </div>

  <div class="chatbot-container">
    <button class="ai-chatbot-button">Chatbot indítása</button>
  </div>

  <div class="todo-list">
    <form class="todo-form">
      <input type="text" class="todo-input" placeholder="Új feladat hozzáadása">
      <button type="submit">Hozzáad</button>
    </form>
    <div class="todo-list-items"></div>
  </div>
</body>
</html>

