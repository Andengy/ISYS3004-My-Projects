/* JavaScript form validation */
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    /* Check if any field is empty */
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    /* Check if email is valid */
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    /* Proceed with form submission */
    alert('Form submitted successfully!');
});

/*Function to validate email format */
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* JavaScript for toggling dark mode */
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
