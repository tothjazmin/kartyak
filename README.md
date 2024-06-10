<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <link href="kartya.css" rel="stylesheet">
       
<style>﻿body {
    background-color: peachpuff;
    color: #000;
    transition: background-color 0.3s, color 0.3s;
    position: relative;
    overflow: hidden;
}

.night-mode {
    background-color: #333;
    color: #fff;
}

.toggle-night-mode {
    padding: 10px 20px;
    background-color: #ccc;
    border: none;
    cursor: pointer;
    margin: 10px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
}

.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: olive;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1000;
    transition: opacity 0.5s ease;
    width: 300px;
    text-align: center;
}

.toast-content {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.toast-icon {
    margin-bottom: 10px;
}

.toast-message {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    text-align: center;
}

.toast-close {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}

.responsive-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    height: 40px;
    width: 100%;
}

.menu {
    list-style-type: none;
    padding: 0;
    display: flex;
    margin: 0;
}

    .menu li {
        margin: 0 20px;
    }

        .menu li a {
            text-decoration: none;
            color: #fff;
        }

.kartyak {
    display: flex;
    justify-content: center;
    margin: 40px;
    flex-wrap: wrap;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 350px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    margin: 10px;
    position: relative;
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
}

.flip-card-front {
    background-color: darkkhaki;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.flip-card-back {
    background-color: lightpink;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
}

.card-button {
    font-size: 20px;
    padding: 5px 10px;
    background-color: seashell;
    color: black; /* Fekete szín */
    transition: background-color 0.3s ease;
    margin-top: 10px;
    text-decoration: none;
    display: inline-block;
}

@media (max-width: 768px) {
    .menu {
        display: flex;
        justify-content: flex-end; /* Jobb oldali igazítás */
        width: auto; /* Automatikus szélesség */
        margin-right: 20px; /* Margó a menühöz */
    }

    .menu-icon {
        display: none;
    }

    .menu li {
        margin: 0 10px; /* Kisebb margó */
    }

        .menu li a {
            color: #fff;
        }
}</style>
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
                    <img src="virag.jpg" style="width:200px;height:150px;">
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
                    <img src="virag.jpg" style="width:200px;height:150px;">
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
                    <img src="virag.jpg" style="width:200px;height:150px;">
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
    <input type="text" id="taskInput" placeholder="Új feladat hozzáadása">
    <button onclick="addTask()">Hozzáadás</button>
    <ul id="taskList">
        <!-- ToDo feladatok jelennek meg itt -->
    </ul>

    <h1>AI Chatbot</h1>
    <div>
        <input type="text" id="chatInput" placeholder="Kérdés...">
        <button onclick="askQuestion()">Kérdez</button>
    </div>
    <div id="chatOutput">
        <!-- Chatbot válaszai jelennek meg itt -->
    </div>
</body>
</html>

    
