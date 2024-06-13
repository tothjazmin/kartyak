<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
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
}

.toast-close {
    cursor: pointer;
}

.responsive-menu {
    background-color: #333;
    padding: 10px;
}

.menu {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.menu-icon {
    display: none;
    font-size: 30px;
    cursor: pointer;
    color: white;
    padding: 10px;
}

.menu li {
    margin: 10px;
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
    margin-top: 100px; /* Added margin to avoid overlap with menu */
}

.flip-card {
    background-color: transparent;
    width: 200px;
    height: 300px;
    perspective: 1000px;
    margin: 10px;
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
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.flip-card-front {
    background-color: #fff;
}

.flip-card-back {
    background-color: #eee;
    transform: rotateY(180deg);
}

.card-img {
    width: 100%;
    height: auto;
    border-radius: 15px 15px 0 0;
}

.card-button {
    padding: 10px;
    margin-top: 10px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.task-container {
    margin: 20px;
}

#taskInput {
    padding: 10px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #333;
}

#taskList {
    list-style-type: none;
    padding: 0;
}

#taskList li {
    padding: 10px;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 5px;
}

.chatbot-container {
    margin: 20px;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.chatbox {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background-color: #f9f9f9;
}

.chat-output {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
}

.chat-message {
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    max-width: 80%;
    word-wrap: break-word;
}

.user-message {
    align-self: flex-end;
    background-color: #dcf8c6;
}

.bot-message {
    align-self: flex-start;
    background-color: #fff;
}

#chatInput {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .kartyak {
        flex-direction: column;
        align-items: center;
        margin-top: 200px; /* More margin for smaller screens */
    }

    .menu {
        flex-direction: column;
        align-items: flex-start;
    }

    .menu-icon {
        display: block;
    }

    .menu {
        display: none;
    }

    .menu.active {
        display: flex;
    }

    .dropdown-menu {
        position: static;
        background-color: #444;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .kartyak {
        margin-top: 250px; /* More margin for smallest screens */
    }

    .chatbot-container {
        margin-top: 20px; /* Ensure proper spacing */
    }
}
</style>
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
                    <li><a href="https://sites.google.com/view/ita-tjm10b/python">Python</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/web">Web</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/h%C3%A1l%C3%B3zat">Hálózat</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/bemutatkoz%C3%A1s">Bemutatkozás</a></li>
                </ul>
            </li>
        </ul>
    </nav>

    <div class="content">
        <div class="kartyak">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="virag.jpg" alt="Virág" class="card-img">
                        <h1>Tóth Jázmin Mária</h1>
                        <h3>Mátészalkán tanulok az Informatika szakon a Gépészetiben</h3>
                        <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
                    </div>
                    <div class="flip-card-back">
                        <h1>Tóth Jázmin Mária</h1>
                        <p>Mátészalkán tanulok az Informatika szakon a Gépészetiben</p>
                        <p>11.-es vagyok</p>
                        <a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal" class="card-button">Google Sites Oldalam</a>
                    </div>
                </div>
            </div>
            <!-- Ismétlődő kártyák -->
        </div>

        <div class="chatbot-container">
            <h1>AI Chatbot</h1>
            <p>Milyen kérdésekre tudok válaszolni:</p>
            <ul>
                <li>Hogy hívnak?</li>
                <li>Hány éves vagy?</li>
                <li>Melyik iskolába jársz?</li>
                <li>Hova valósi vagy?</li>
            </ul>
            <div class="chatbox">
                <div id="chatOutput" class="chat-output">
                    <!-- Chatbot válaszai jelennek meg itt -->
                </div>
                <input type="text" id="chatInput" placeholder="Kérdés...">
                <button onclick="askQuestion()">Kérdez</button>
            </div>
        </div>
    </div>

    <div class="task-container">
        <input type="text" id="taskInput" placeholder="Új feladat hozzáadása">
        <button onclick="addTask()">Hozzáadás</button>
        <ul id="taskList">
            <!-- ToDo feladatok jelennek meg itt -->
        </ul>
    </div>
</body>
</html>
