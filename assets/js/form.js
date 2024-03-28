const button = document.getElementById('button');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('button clicked');
});

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});