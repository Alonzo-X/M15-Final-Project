document.getElementById("personForm").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault(); // prevent page reload

    // Get values from form
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let course = document.getElementById("course").value;
    let section = document.getElementById("section").value;
    let role = document.getElementById("role").value;

    // Create person object
    let person = {
        firstName: firstName,
        lastName: lastName,
        course: course,
        section: section,
        role: role
    };

    // Print JavaScript object
    console.log("Person object:");
    console.log(person);

    // Convert to JSON (multi-line)
    let jsonPerson = JSON.stringify(person, null, 2);

    // Print JSON format
    console.log("JSON format:");
    console.log(jsonPerson);
}