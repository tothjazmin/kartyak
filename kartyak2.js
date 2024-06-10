document.addEventListener('DOMContentLoaded', () => {
    const toggleNightModeButton = document.querySelector('.toggle-night-mode');
    const closeButton = document.querySelector('.toast-close');
    const toggleConfettiButton = document.querySelector('.toggle-confetti');
    const todoInput = document.getElementById('todo-input');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    const chatInput = document.getElementById('chat-input');
    const sendMessageButton = document.getElementById('send-message');
    const chatHistory = document.getElementById('chat-history');

    toggleNightModeButton.addEventListener('click', toggleNightMode);
    closeButton.addEventListener('click', () => {
        document.querySelector('.toast').style.display = 'none';
    });
    toggleConfettiButton.addEventListener('click', toggleConfetti);
    addTodoButton.addEventListener('click', addTodo);
    sendMessageButton.addEventListener('click', sendMessage);

    function toggleNightMode() {
        document.body.classList.toggle('night-mode');
        toggleNightModeButton.textContent = document.body.classList.contains('night-mode')
            ? '�jszakai m�d kikapcsol�sa'
            : '�jszakai m�d bekapcsol�sa';
    }

    function toggleConfetti() {
        const bubbles = document.querySelector('.bubbles');
        bubbles.classList.toggle('show');
        toggleConfettiButton.textContent = bubbles.classList.contains('show')
            ? 'Konfetti kikapcsol�sa'
            : 'Konfetti bekapcsol�sa';
    }

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.textContent = todoText;
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    }

    function sendMessage() {
        const question = chatInput.value.trim();
        if (question !== '') {
            const message = document.createElement('div');
            message.textContent = getChatResponse(question);
            chatHistory.appendChild(message);
            chatInput.value = '';
        }
    }

    function getChatResponse(question) {
        switch (question.toLowerCase()) {
            case 'hogy h�vnak?':
                return 'T�th J�zmin M�ria';
            case 'h�ny �ves vagy?':
                return '17';
            case 'melyik iskol�ba j�rsz?':
                return 'M�t�szalk�n a G�p�szetiben';
            default:
                return 'Ezt a k�rd�st nem �rtem.';
        }
    }
});
