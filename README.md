<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <link href="kartya.css" rel="stylesheet">
    <style>body {
    font-family: Arial, sans-serif;
}

.toggle-night-mode {
    margin: 10px;
    padding: 10px;
}

.toast {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333;
    color: white;
}

.toast-close {
    cursor: pointer;
}

.responsive-menu {
    background-color: #333;
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

.kartyak {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
}

.flip-card-back {
    transform: rotateY(180deg);
}

.card-img {
    width: 100%;
    height: auto;
}

.card-button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border: none;
    cursor: pointer;
}

.task-container, .chatbot-container {
    padding: 20px;
}

#taskList {
    list-style-type: none;
    padding: 0;
}

.night-mode {
    background-color: #222;
    color: white;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
    .kartyak {
        flex-direction: column;
        align-items: center;
    }

    .menu {
        display: none;
        flex-direction: column;
        width: 100%;
    }

    .menu-icon {
        display: block;
    }

    #menu-toggle:checked + .menu {
        display: flex;
    }
}
</style>
    <script>
        // JavaScript kód itt
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
                chatOutput.innerText = chatbotAnswers[question];
            } else {
                chatOutput.innerText = "Ez a kérdésre még nem tudok válaszolni.";
            }
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
        </ul>
    </nav>

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

    <div class="task-container">
        <input type="text" id="taskInput" placeholder="Új feladat hozzáadása">
        <button onclick="addTask()">Hozzáadás</button>
        <ul id="taskList">
            <!-- ToDo feladatok jelennek meg itt -->
        </ul>
    </div>

    <div class="chatbot-container">
        <h1>AI Chatbot</h1>
        <div>
            <input type="text" id="chatInput" placeholder="Kérdés...">
            <button onclick="askQuestion()">Kérdez</button>
        </div>
        <div id="chatOutput">
            <!-- Chatbot válaszai jelennek meg itt -->
        </div>
    </div>
</body>
</html>
