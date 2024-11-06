// Simple form validation for booking and contact forms

document.addEventListener("DOMContentLoaded", function () {
    // Booking Form Validation
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", function (event) {
        let valid = true;

        // Get values from form fields
        const name = document.getElementById("name").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;

        // Validate fields
        if (!name) {
            valid = false;
            alert("Please enter your full name.");
        }

        if (!destination) {
            valid = false;
            alert("Please select a destination.");
        }

        if (!date) {
            valid = false;
            alert("Please select your travel date.");
        }

        // If validation fails, prevent form submission
        if (!valid) {
            event.preventDefault();
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        let valid = true;

        // Get values from form fields
        const contactName = document.getElementById("contact-name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validate fields
        if (!contactName) {
            valid = false;
            alert("Please enter your name.");
        }

        if (!email) {
            valid = false;
            alert("Please enter your email address.");
        } else if (!validateEmail(email)) {
            valid = false;
            alert("Please enter a valid email address.");
        }

        if (!message) {
            valid = false;
            alert("Please enter a message.");
        }

        // If validation fails, prevent form submission
        if (!valid) {
            event.preventDefault();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
