let v1 = 3;
let v2 = 4
// FIX: Wrap code so it runs only after the HTML has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // FIX: Restored alert so it executes correctly
    alert("JavaScript error has been fixed!");

    // FIX: Corrected getElementsById → getElementById (singular)
    let section = document.getElementById("s1");

    // FIX: Apply general styling to the section
    section.style.width = "50%";
    section.style.textAlign = "center";
    section.style.fontFamily = "arial, serif";

    // FIX: Corrected misspelling stlye → style
    section.style.fontWeight = "bold";
    section.style.fontStyle = "italic";
    section.style.fontSize = "20px";

    // =========================
    // INDIVIDUAL COLOR DIVS
    // =========================

    // FIX: Corrected getelementById → getElementById (case-sensitive)
    // FIX: innerhtml → innerHTML (case-sensitive)

    // RED
    const red = document.getElementById("red");
    red.innerHTML = "RED";
    red.style.backgroundColor = "red";
    red.style.height = "40px";
    red.style.lineHeight = "40px";

    // ORANGE
    const orange = document.getElementById("orange");
    orange.innerHTML = "ORANGE";
    orange.style.backgroundColor = "orange";
    orange.style.height = "40px";
    orange.style.lineHeight = "40px";

    // YELLOW
    const yellow = document.getElementById("yellow");
    yellow.innerHTML = "YELLOW";
    yellow.style.backgroundColor = "yellow";
    yellow.style.height = "40px";
    yellow.style.lineHeight = "40px";

    // GREEN
    // FIX: Variable name was incorrect (purple → green)
    const green = document.getElementById("green");
    green.innerHTML = "GREEN";
    green.style.backgroundColor = "green";
    green.style.height = "40px";
    green.style.lineHeight = "40px";

    // INDIGO
    const indigo = document.getElementById("indigo");
    indigo.innerHTML = "INDIGO";
    indigo.style.backgroundColor = "indigo";
    indigo.style.height = "40px";
    indigo.style.lineHeight = "40px";

    // VIOLET
    const violet = document.getElementById("violet");
    violet.innerHTML = "VIOLET";
    violet.style.backgroundColor = "violet";
    violet.style.height = "40px";
    violet.style.lineHeight = "40px";

});
