<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <link href="kartya.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
      
body {
    font-family: Arial, sans-serif;
    background-color: #ffc0cb; /* Rózsaszín háttérszín */
    color: #333;
    margin: 0;
    padding: 0;
}

a {
    color: #333;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}


.toast {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffb6c1; /* Világosabb rózsaszín */
    color: #333;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
}

.toast-close {
    cursor: pointer;
}

.responsive-menu {
    background-color: #333;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
}

.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu li {
    margin: 0 10px;
}

.menu a {
    color: white;
    text-decoration: none;
    padding: 10px;
    transition: all 0.3s ease;
    border-radius: 5px;
}

.menu a:hover {
    background-color: #555;
}

.dropdown-toggle::after {
    content: ' ▼';
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #333;
    padding: 10px;
    border-radius: 5px;
}

.menu li:hover .dropdown-menu {
    display: block;
}


.chatbot-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px;
    flex-wrap: wrap;
}

.chatbot {
    flex: 1;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-right: 20px;
    width: 100%;
    max-width: 400px;
}

.chat-output {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.chat-input {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.chat-input input[type="text"] {
    flex: 1;
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
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-left: 20px;
    width: 100%;
    max-width: 400px;
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
    background-color: #555;
}


.chat-messages {
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-message {
    background-color: #e0f7fa;
    border-top-right-radius: 0;
}

.bot-message {
    background-color: #f5f5f5;
    border-top-left-radius: 0;
}

.message-container {
    display: flex;
    margin-bottom: 10px;
}

.user-message .message {
    margin-left: auto;
    padding: 10px;
    border-radius: 10px;
    max-width: 70%;
    word-wrap: break-word;
}

.bot-message .message {
    margin-right: auto;
    padding: 10px;
    border-radius: 10px;
    max-width: 70%;
    word-wrap: break-word;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    perspective: 1000px;
    margin: 20px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
}

.flip-card-front {
    background-color: #fff;
    color: #333;
}

.flip-card-back {
    background-color: #f5f5f5;
    color: #333;
    transform: rotateY(180deg);
}

.card-content {
    padding: 20px;
}

.card-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.card-button:hover {
    background-color: #555;
}


@media screen and (max-width: 768px) {
    .menu {
        flex-direction: column;
        align-items: flex-start;
    }

    .menu li {
        margin: 10px 0;
    }

    .menu a {
        width: 100%;
        text-align: left;
    }

    .dropdown-menu {
        position: static;
        width: auto;
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
        max-width: 100%;
    }

    .task-container {
        width: 100%;
        margin-left: 0;
        max-width: 100%;
    }

    .flip-card {
        width: 100%;
        max-width: 300px;
        height: 400px;
        margin: 10px;
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
            if (question in chatbotAnswers) {
                chatOutput.innerHTML += `<div class="chat-message user-message">${question}</div>`;
                chatOutput.innerHTML += `<div class="chat-message bot-message">${chatbotAnswers[question]}</div>`;
            } else {
                chatOutput.innerHTML += `<div class="chat-message bot-message">Ez a kérdésre még nem tudok válaszolni.</div>`;
            }
            // Clear input field
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
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="menu-icon">&#9776;</label>
        <ul class="menu">
            <li><a href="#home">Főoldal</a></li>
            <li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Rólam</a></li>
            <li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Google Sites Oldalam</a></li>
            <li class="dropdown-toggle">Hasznos linkek
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
        </div>

        <div class="chatbot-container">
            <div class="chatbot">
                <h1>AI Chatbot</h1>
                <div><p>Az AI Chatbot a következő kérdésekre tud válaszolni:</p>
                <p>Hogy hívnak?</p>
                <p>Hova valósi vagy?</p>
                <p>Hány éves vagy?</p>
                <p>Melyik iskolába jársz?</p>
                </div>
                <div class="chat-output" id="chatOutput">
                    
                </div>
                <div class="chat-input">
                    <input type="text" id="chatInput" placeholder="Kérdés...">
                    <button onclick="askQuestion()">Kérdez</button>
                </div>
            </div>

            <div class="task-container">
                <h2>ToDo lista</h2>
                <input type="text" id="taskInput" placeholder="Új feladat hozzáadása">
                <button onclick="addTask()">Hozzáadás</button>
                <ul id="taskList">
                    <!-- ToDo feladatok jelennek meg itt -->
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
