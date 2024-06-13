<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weboldal</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="kartya.css">
    <link rel="stylesheet" href="chatbot.css">
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
    justify-content: center
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

<div class="chatbot-container">
    <div class="chatbox">
        <div class="chat-header">
            <h2>Mikre tudok válaszolni?</h2>
        </div>
        <div class="chat-output">
            <div class="chat-message bot-message">
                <p>Üdvözlöm! Miben segíthetek?</p>
            </div>
        </div>
        <input type="text" id="chatInput" placeholder="Írjon üzenetet...">
        <button id="sendButton">Küldés</button>
    </div>
</div>

</body>
</html>
