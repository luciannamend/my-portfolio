/*
File: contact.js
Student's Name: LUCIANNA MENDONCA DOMINGUES
Student ID: 301307882
Date: OCTOBER 6, 2023
*/

document.addEventListener("DOMContentLoaded", function () {

    // Get the contact form element
    const contactForm = document.getElementById("contact-form");

    // Add a submit event listener to the form
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get user input values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const contactNumber = document.getElementById("contact-number").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can send this data to a server for further processing here
        // For now, let's log the data to the console
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Contact Number:", contactNumber);
        console.log("Email:", email);
        console.log("Message:", message);

        // Redirect back to the Home Page (change the URL as needed)
        window.location.href = "./index.ejs";
    });
});