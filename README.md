<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <link href="kartya.css" rel="stylesheet">
    <style>/* Alap stílusok */
body {
    font-family: Arial, sans-serif;
    background-color: #ffc0cb; /* Rózsaszín háttérszín */
    color: #333;
    margin: 0;
    padding: 0;
}

/* Általános link stílus */
a {
    color: #333;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Toast menü */
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9); /* Fehér háttér */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: none;
    z-index: 999;
    max-width: 300px;
}

.toast-content {
    text-align: center;
}

.toast-icon {
    font-size: 48px;
    color: #ffc0cb; /* Rózsaszín ikon */
}

.toast-message {
    font-size: 18px;
    margin-bottom: 10px;
}

.toast-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    color: #333;
}

.toast-close:hover {
    color: #555;
}

/* Responsive menü */
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

/* Kártyák elrendezése */
.cards-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 20px;
    flex-wrap: wrap;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    margin: 10px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px; /* Kerekített sarkok */
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.flip-card-back {
    background-color: #ffb6c1; /* Világosabb rózsaszín háttér */
    color: #333;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-content {
    padding: 20px;
}

.card-button {
    padding: 10px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.card-button:hover {
    background-color: #555;
}

/* Google Sites gomb */
.google-sites-button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.google-sites-button:hover {
    background-color: #555;
}
</style>
</head>
<body>
    <div class="student-info">
        <p>Tóth Jázmin Mária</p>
        <p>11.-es Gépészes Informatika szakos tanuló</p>
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

    <div class="cards-container">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card-content">
                        <h3>Kártya 1</h3>
                        <p>Ez egy kártya leírása.</p>
                        <a href="#" class="card-button">Tovább</a>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="card-content">
                        <h3>Kártya 1 Hátlap</h3>
                        <p>További információ a kártyáról.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card-content">
                        <h3>Kártya 2</h3>
                        <p>Ez egy másik kártya leírása.</p>
                        <a href="#" class="card-button">Tovább</a>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="card-content">
                        <h3>Kártya 2 Hátlap</h3>
                        <p>További információ a másik kártyáról.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <button class="google-sites-button"><a href="https://sites.google.com/view/ita-tjm10b" target="_blank">Google Sites</a></button>

    <div class="toast">
        <div class="toast-content">
            <i class="toast-icon fas fa-info-circle"></i>
            <h1>Tóth Jázmin Mária vagyok</h1>
            <p class="toast-message">Mátészalkán tanulok az Informatika szakon a Gépészetiben</p>
            <p>11.-es vagyok</p>
        </div>
        <span class="toast-close">&times;</span>
    </div>

    <script src="kartya.js"></script>
</body>
</html>
