<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weboldal</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="kartya.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
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
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 600px;
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
    position: absolute;
    width: 100%;
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
        <li><a href="#about">Rólam</a></li>
        <li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Google Sites Oldalam</a></li>
        <li class="dropdown-toggle">
            <span>Bemutatkozás</span>
            <ul class="dropdown-menu">
                <li><a href="https://sites.google.com/view/ita-tjm10b/digikult">Digikult</a></li>
                <li><a href="https://sites.google.com/view/ita-tjm10b/projekt">Projekt</a></li>
                <li><a href="https://sites.google.com/view/ita-tjm10b/python">Python</a></li>
                <li><a href="https://sites.google.com/view/ita-tjm10b/web">Web</a></li>
                <li><a href="https://sites.google.com/view/ita-tjm10b/h%C3%A1l%C3%B3zat">Hálózat</a></li>
            </ul>
        </li>
    </ul>
</nav>

<div class="kartyak">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="namjoon.jpg" alt="Kim Namjoon" class="card-img">
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
                <img src="jin.jpg" alt="Kim Seokjin" class="card-img">
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
                <img src="yoongi.jpg" alt="Min Yoongi" class="card-img">
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

</body>
</html>
