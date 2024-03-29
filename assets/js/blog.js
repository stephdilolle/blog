// Toggle light or dark mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

// Back button to main form page
document.getElementById("aboutButton").addEventListener("click", function() {
    window.location.href = "index.html";
      });
// Pull and display data from localStorage
// Retrieve the stringified object from localStorage
const formDataString = localStorage.getItem('formData');
const formData = JSON.parse(formDataString);

const username = formData.username;
const formDataTitle = formData.title;
const formDataContent = formData.content;

// Update the content of the cards with the retrieved data
for (let i = 1; i <= 5; i++) {
    const title = localStorage.getItem(`title${i}`);
    const body = localStorage.getItem(`body${i}`);

    const titleElement = document.getElementById(`title${i}`);
    const bodyElement = document.getElementById(`body${i}`);

    if (titleElement && bodyElement) {
        titleElement.textContent = title || 'Default Title';
        bodyElement.textContent = body || 'Default Content';
    }
}