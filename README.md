<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weboldal</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="kartya.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-JxxAgJNHMU2gupQrWQLQMXcEbvm0SbY5n97RCy1dP10Z6SR0q/LP3qh0VbAPiVRERkYi/2HoIjSYfyz6F4qfGg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
            top: 10px;
            right: 10px;
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
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        .menu-icon {
            font-size: 30px;
            cursor: pointer;
            color: white;
            padding: 10px;
        }

        .menu li {
            margin: 0 10px;
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
            margin-top: 150px; /* Added margin to avoid overlap with menu */
        }

        .flip-card {
            background-color: #fff;
            width: 200px;
            height: 300px;
            perspective: 1000px;
            margin: 10px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
        }

        .flip-card-back {
            transform: rotateY(180deg);
        }

        /* Éjszakai mód */
        body.night-mode {
            background-color: #333;
            color: #fff;
        }

        .toggle-night-mode {
            background-color: #333;
            color: #fff;
            border-color: #fff;
        }

        .toast {
            background-color: #333;
        }

        .flip-card {
            background-color: #444;
        }

        .flip-card-front, .flip-card-back {
            background-color: #444;
        }

        .menu a {
            color: #fff;
        }

        .dropdown-menu {
            background-color: #555;
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
                if (document.body.classList.contains('night-mode')) {
                    toggleNightModeButton.textContent = 'Éjszakai mód kikapcsolása';
                    document.querySelector('.toast').style.backgroundColor = '#444'; // Adjust toast background color for night mode
                } else {
                    toggleNightModeButton.textContent = 'Éjszakai mód bekapcsolása';
                    document.querySelector('.toast').style.backgroundColor = '#333'; // Adjust toast background color back to default
                }
            }

            // Show toast on page load
            document.querySelector('.toast').style.display = 'flex';
        });
    </script>
</head>
<body>

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
    <div>
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="menu-icon">&#9776;</label>
        <ul class="menu">
            <li><a href="#home">Főoldal</a></li>
            <li><a href="#about">Rólam</a></li>
            <li><a href="https://sites.google.com/view/ita-tjm10b/f%C5%91oldal">Google Sites Oldalam</a></li>
            <li class="dropdown-toggle">
                <span>Feladatlista</span>
                <ul class="dropdown-menu">
                    <li><a href="https://sites.google.com/view/ita-tjm10b/digikult">Digikult</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/projekt">Projekt</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/python">Python</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/web">Web</a></li>
                    <li><a href="https://sites.google.com/view/ita-tjm10b/h%C3%A1l%C3%B3zat">Hálózat</a></li>
                </ul>
            </li>
            <li><button class="ai-chatbot-button">AI Chatbot</button></li>
        </ul>
    </div>
    <button class="toggle-night-mode">Éjszakai mód bekapcsolása</button>
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
