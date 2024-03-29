// Toggle light or dark mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});


// Loop through the form data and save each entry in local storage
for (let i = 1; i <= 5; i++) {
    const username = form.elements[`username${i}`].value;
    const title = form.elements[`title${i}`].value;
    const content = form.elements[`content${i}`].value;

    // Create an object with the form data
    const formData = {
        username: username,
        title: title,
        content: content
    };

    // Convert the object to a string
    const formDataString = JSON.stringify(formData);

    // Save the stringified object to local storage with a dynamic key
    localStorage.setItem(`formData${i}`, formDataString);
    window.location.href = 'blog.html';
}


    // Submit button goes to blog page
    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "blog.html";
    });