document.getElementById("generateBtn").addEventListener("click", function() {
    const inputField = document.getElementById("numberInput");
    const errorMessage = document.getElementById("error-message");
    const outputDiv = document.getElementById("output");
    const number = parseInt(inputField.value);

    outputDiv.innerHTML = "";
    errorMessage.textContent = "";

    if (isNaN(number)) {
        errorMessage.textContent = "Please enter a valid number!";
        return;
    }

    if (number <= 0) {
        errorMessage.textContent = "Please enter a number greater than 0!";
        return;
    }

    let tableHTML = `<h2>Multiplication Table of ${number}</h2>`;
    tableHTML += "<ul>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<li>${number} × ${i} = ${number * i}</li>`;
    }
    tableHTML += "</ul>";
    outputDiv.innerHTML = tableHTML;
});
