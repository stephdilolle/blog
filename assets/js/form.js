// Toggle light or dark mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

const form = document.getElementById('blogForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the current form data
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Store the form data in localStorage
    const formData = {
        username: username,
        title: title,
        content: content
    };
    const formDataString = JSON.stringify(formData);

    // Loop to store form data for multiple entries
    for (let i = 0; i <= 5; i++) {
        localStorage.setItem(`formData${i}`, formDataString);
    }

    // Redirect the user to blog.html after storing form data
    window.location.href = 'blog.html';
});