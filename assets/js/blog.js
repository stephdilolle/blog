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
      
// Loop through localStorage to retrieve and display stored data in the card elements
for (let i = 1; i <= 5; i++) {
    const storedData = localStorage.getItem(`formData${i}`);

    if (storedData) {
        const formData = JSON.parse(storedData);

        // Update the title and body content of each card based on the stored data
        document.getElementById(`title${i}`).textContent = formData.title;
        document.getElementById(`body${i}`).textContent = formData.content;
    }
}