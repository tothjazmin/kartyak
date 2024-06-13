<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <link href="kartya.css" rel="stylesheet">
    <style>
   
   
/* Alap stílusok */
body {
    font-family: Arial, sans-serif;
    background-color: #ffc0cb; /* Rózsaszín háttérszín */
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
    padding: 5px 10px; /* Kis méret a toast menünek */
    background-color: #333;
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toast-close {
    cursor: pointer;
}

/* Responsive menü */
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

/* Chatbot és ToDo lista */
.chatbot-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
}

.chatbot {
    flex: 1;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-right: 20px;
}

.chat-output {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}

.chat-input {
    margin-top: 10px;
}

.chat-input input[type="text"] {
    width: calc(100% - 70px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

.chat-input button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.task-container {
    flex: 1;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-left: 20px;
}

.task-container h2 {
    margin-bottom: 10px;
}

.task-container input[type="text"] {
    width: calc(100% - 100px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

.task-container button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

/* Éjszakai mód */
.night-mode {
    background-color: #333;
    color: white;
}

.toggle-night-mode {
    margin: 10px;
    padding: 10px;
    background-color: #333;
    color: white;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 5px;
}

.toggle-night-mode:hover {
    background-color: #444;
}

/* Chatbot stílusok */
.chat-message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    max-width: 70%;
}

.user-message {
    background-color: #e0f7fa;
    align-self: flex-end;
}

.bot-message {
    background-color: #f5f5f5;
}

/* Mobil nézet */
@media screen and (max-width: 768px) {
    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #333;
        padding: 10px 0;
        z-index: 1000;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .menu-icon {
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .menu.active {
        display: flex;
    }

    .menu li {
        margin: 10px 0;
    }

    .menu a {
        color: white;
        padding: 10px;
        text-align: center;
        width: 100%;
        display: block;
    }

    .dropdown-menu {
        position: relative;
        width: 100%;
        left: 0;
        margin-top: 5px;
    }

    .chatbot-container {
        flex-direction: column;
        align-items: center;
    }

    .chatbot {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }

    .task-container {
        width: 100%;
        margin-left: 0;
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
            <div class="chatbot">
                <div id="chatOutput" class="chat-output">
                    <!-- Chatbot válaszai jelennek meg itt -->
                </div>
                <div class="chat-input">
                    <input type="text" id="chatInput" placeholder="Kérdés...">
                    <button onclick="askQuestion()">Kérdez</button>
                </div>
            </div>
            <div class="task-container">
                <h2>ToDo Lista</h2>
                <input type="text" id="taskInput" placeholder="Új feladat hozzáadása">
                <button onclick="addTask()">Hozzáadás</button>
                <ul id="taskList">
                    <!-- ToDo feladatok jelennek meg itt -->
                </ul>
            </div>
        </div>
    </div>

    <script>
        function toggleMenu() {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }
    </script>
</body>
</html>
