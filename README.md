<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <style>
        /* Alap stílusok */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        /* Toast stílusok */
        .toast {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            display: none;
        }

        .show-toast {
            display: block;
        }

        .toast-close {
            position: absolute;
            top: 10px;
            right: 15px;
            cursor: pointer;
            color: #ccc;
            font-size: 20px;
        }

        .toast-close:hover {
            color: #fff;
        }

        /* Chatbot stílusok */
        .chatbot {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 20px;
            width: 100%;
            max-width: 400px;
        }

        .chat-messages {
            max-height: 300px;
            overflow-y: auto;
            padding: 10px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .message {
            margin-bottom: 10px;
        }

        /* To-Do lista stílusok */
        .task-container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin: 20px;
            width: 100%;
            max-width: 400px;
        }

        .task-container h2 {
            margin-bottom: 10px;
        }

        .task-list {
            list-style-type: none;
            padding: 0;
        }

        .task-list li {
            margin-bottom: 10px;
        }

        /* Kártyák stílusai */
        .flip-card {
            background-color: transparent;
            width: 300px;
            height: 400px;
            perspective: 1000px;
            margin: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden; /* Megakadályozza a tartalom kiugrását */
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
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

        /* Mobil nézet */
        @media screen and (max-width: 768px) {
            .flip-card {
                width: 100%;
                max-width: 300px;
                height: 400px;
                margin: 10px;
            }

            .chatbot, .task-container {
                margin: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="toast" id="toast">
        <span class="toast-close" onclick="closeToast()">&times;</span>
        <p>Toast üzenet</p>
    </div>

    <div class="responsive-menu">
        <ul class="menu">
            <li><a href="#főoldal">Főoldal</a></li>
            <li><a href="#rólunk">Rólunk</a></li>
            <li class="dropdown-toggle">
                <a href="#">Linkek</a>
                <ul class="dropdown-menu">
                    <li><a href="https://sites.google.com/view/ita-tjm10b/digikult">Digikult</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/projekt">Projekt</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/python">Python</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/web">Web</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/hálózat">Hálózat</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/bemutatkozás">Bemutatkozás</a></li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="chatbot">
        <div class="chatbot-container">
            <div class="chatbot-header">
                <h2>Chatbot</h2>
            </div>
            <div class="chat-messages">
                <div class="message from-bot">
                    <div class="message-content">
                        <p>Üdvözlöm! Jelenleg ezekre a kérdésekre tudok válaszolni:</p>
                        <ul>
                            <li>Hány éves vagy?</li>
                            <li>Hogy hívnak?</li>
                            <li>Melyik iskolába jársz?</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="chatbot-input">
                <input type="text" placeholder="Írjon ide...">
                <button class="send-button" onclick="sendMessage()">Küldés</button>
            </div>
        </div>
    </div>

    <div class="task-container">
        <h2>To Do lista</h2>
        <ul class="task-list" id="taskList">
           
        </ul>
        <div>
            <input type="text" id="taskInput" placeholder="Új feladat...">
            <button onclick="addTask()">Hozzáadás</button>
        </div>
    </div>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="card-content">
                    <h3>Tóth Jázmin Mária</h3>
                    <p>Gépészes tanuló</p>
                    <a href="#" class="card-button">Tovább</a>
                    <button class="google-sites-button"><a href="https://sites.google.com/view/ita-tjm10b" target="_blank">Google Sites</a></button>
                </div>
            </div>
            <div class="flip-card-back">
                <div class="card-content">
                    <h3>Tóth Jázmin Mária</h3>
                    <p>Gépészes tanuló</p>
                    <button class="google-sites-button"><a href="https://sites.google.com/view/ita-tjm10b" target="_blank">Google Sites</a></button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Toast megjelenítése
        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.add('show-toast');
        }

        // Toast bezárása
        function closeToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('show-toast');
        }

        // Chatbot funkcionalitás
        const chatbotInput = document.querySelector('.chatbot-input input         const chatbotMessages = document.querySelector('.chat-messages');

        function sendMessage() {
            const message = chatbotInput.value.trim();
            if (message !== '') {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message', 'from-user');
                messageElement.innerHTML = `<div class="message-content"><p>${message}</p></div>`;
                chatbotMessages.appendChild(messageElement);
                chatbotInput.value = '';
                setTimeout(() => {
                    respondToUser(message);
                }, 500); // Válasz késleltetése
            }
        }

        function respondToUser(message) {
            let response;
            switch (message.toLowerCase()) {
                case 'hány éves vagy?':
                    response = '17 éves vagyok.';
                    break;
                case 'hogy hívnak?':
                    response = 'Tóth Jázmin Mária vagyok.';
                    break;
                case 'melyik iskolába jársz?':
                    response = 'Mátészalkai Gépészeti Szakgimnáziumban tanulok.';
                    break;
                default:
                    response = 'Sajnálom, erre a kérdésre még nem tudok válaszolni.';
                    break;
            }
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'from-bot');
            messageElement.innerHTML = `<div class="message-content"><p>${response}</p></div>`;
            chatbotMessages.appendChild(messageElement);
        }

        // To-Do lista funkcionalitás
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                const taskItem = document.createElement('li');
                taskItem.textContent = taskText;
                taskList.appendChild(taskItem);
                taskInput.value = '';
            }
        }

        // Close toast function
        function closeToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('show-toast');
        }
    </script>
</body>
</html>

