function getcolor() {
    const colorPicker = document.getElementById('color')
    const selectedColor = colorPicker.value;
    output.style.color = selectedColor

}

document.addEventListener("DOMContentLoaded", function () {
    const displayButton = document.getElementById("displayButton");
    const textBox = document.getElementById("textBox");
    const output = document.getElementById("output");
    const inputSection = document.getElementById("inputSection");

    displayButton.addEventListener("click", function () {
        const inputValue = textBox.value.trim();
        document.body.classList.toggle("pink")
        document.querySelector(".inp").style.display = "none"
        document.querySelector(".inp-2").style.display = "none"
        if (inputValue === "") {
            output.textContent = "Please enter something in the text box.";
            output.style.color = "red";
            output.style.display = "flex";
        } else {
            output.textContent = `${inputValue}`;
            output.style.color = getcolor();
            output.style.display = "flex";
            inputSection.style.display = "none";
        }
    });
});

