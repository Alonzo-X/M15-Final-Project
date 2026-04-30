document.addEventListener("DOMContentLoaded", function () {

    const myDiv = document.getElementById("myDiv");
    const button = document.getElementById("addItemBtn");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to DOM homework";
    heading.classList.add("highlight");  // Add highlight class
    myDiv.appendChild(heading);

    // Create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = "This is your first DOM homework assignment";
    myDiv.appendChild(paragraph);

    const ul = document.createElement("ul");

    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = "List Item " + i;
        ul.appendChild(li);
    }

    myDiv.appendChild(ul);

    // Counter for new list items
    let newItemCount = 1;

    // Function to generate random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    button.addEventListener("click", function () {
        const newLi = document.createElement("li");
        newLi.textContent = "New List Item " + newItemCount;
        newLi.style.color = getRandomColor();
        ul.appendChild(newLi);
        newItemCount++;
    });

    // Change myDiv background color on click
    myDiv.addEventListener("click", function () {
        myDiv.style.backgroundColor = getRandomColor();
    });

});