const form = document.getElementById("myForm");

const inputField = document.getElementById("inputField");

const message = document.createElement("p");
form.appendChild(message);

form.addEventListener("submit", function(event) {

    const inputValue = inputField.value;

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (!alphanumericRegex.test(inputValue)) {

        event.preventDefault();

        message.textContent = "Error: Please enter alphanumeric characters only.";
        message.style.color = "red";

    } else {

        message.textContent = "Success! Form submitted correctly.";
        message.style.color = "green";

        event.preventDefault();
    }

});