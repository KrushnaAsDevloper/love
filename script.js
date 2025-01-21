document.addEventListener("DOMContentLoaded", function () {
    const displayButton = document.getElementById("displayButton");
    const textBox = document.getElementById("textBox");
    const output = document.getElementById("output");
    const inputSection = document.getElementById("inputSection");

    displayButton.addEventListener("click", function () {
        const inputValue = textBox.value.trim();
        document.body.classList.toggle("pink")
        document.querySelector(".inp").style.display = "none"
        if (inputValue === "") {
            output.textContent = "Please enter something in the text box.";
            output.style.color = "red";
            output.style.display = "flex"; // Show the output for the error message
        } else {
            output.textContent = `${inputValue}`;
            output.style.color = "white";
            output.style.display = "flex"; // Show the output
            inputSection.style.display = "none"; // Hide the input and button section
        }
    });
});

