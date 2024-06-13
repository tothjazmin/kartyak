<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kártyák</title>
    <link href="kartya.css" rel="stylesheet">
    <script>// Toggle toast menu
const toggleToastMenuButton = document.querySelector('.toggle-toast-menu');
const toastMenu = document.querySelector('.toast');

toggleToastMenuButton.addEventListener('click', () => {
    toastMenu.classList.toggle('show-toast');
});

// Close toast
const closeToastButton = document.querySelector('.toast-close');

closeToastButton.addEventListener('click', () => {
    toastMenu.classList.remove('show-toast');
});

// Chatbot functionality
const chatbotInput = document.querySelector('.chatbot-input input');
const chatbotMessages = document.querySelector('.chatbot-messages');

function sendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'from-user' : 'from-bot');
    messageElement.innerHTML = `<div class="message-content"><p>${message}</p></div>`;
    chatbotMessages.appendChild(messageElement);
}

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = chatbotInput.value.trim();
        if (message !== '') {
            sendMessage(message, 'user');
            chatbotInput.value = '';
            setTimeout(() => {
                respondToUser(message);
            }, 500); // Simulate response delay
        }
    }
});

function respondToUser(message) {
    let response;
    switch (message.toLowerCase()) {
        case 'python programozás':
            response = 'Python programozásban tudok segíteni.';
            break;
        case 'webfejlesztés':
            response = 'Webfejlesztési témákban tudok tájékoztatást nyújtani.';
            break;
        case 'hálózati kérdések':
            response = 'Hálózati kérdésekkel kapcsolatban is szívesen segítek.';
            break;
        default:
            response = 'Sajnálom, erre a kérdésre még nem tudok válaszolni.';
            break;
    }
    sendMessage(response, 'bot');
}
</script>
    <style>
        /* Alap stílusok */
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

/* Toast stílusok */
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
    max-width: 300px; /* Kisebb méret */
}

.toast-close {
    cursor: pointer;
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

/* Chatbot és ToDo lista */
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
    background-color: #555;
}

/* Chatbot stílusok */
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
</head>
<body>
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
                AI Chatbot
            </div>
            <div class="chatbot-messages">
                <div class="message from-user">
                    <div class="message-content">
                        <p>Hello! Miben segíthetek?</p>
                    </div>
                </div>
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
                <button class="send-button">Küldés</button>
            </div>
        </div>
    </div>

    <div class="toast-menu">
        <button class="toggle-toast-menu">Toast menü megjelenítése</button>
        <div class="toast">
            <span class="toast-close">&times;</span>
            <p>Tóth Jázmin Mária</p>
            <p>Gépészes tanuló</p>
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
    </div>

     <script src="kartya.js"></script>

   
</body>
</html>
