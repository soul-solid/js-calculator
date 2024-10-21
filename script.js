const output = document.querySelector(".output");
const input = document.querySelector(".input");
const btns = document.querySelector(".btns");

btns.addEventListener("click", (event) => {
    let buttonText = event.target.textContent;
    
    function createTxtElement() {
        const text = document.createElement("span");
        text.classList.add("display-result");
        text.textContent = input.value;
        output.appendChild(text);
    };

    if (buttonText === "9") {
        input.value += buttonText;
    } else if (buttonText === "8") {
        input.value += buttonText;
    } else if (buttonText === "7") {
        input.value += buttonText;
    } else if (buttonText === "6") {
        input.value += buttonText;
    } else if (buttonText === "5") {
        input.value += buttonText;
    } else if (buttonText === "4") {
        input.value += buttonText;
    } else if (buttonText === "3") {
        input.value += buttonText;
    } else if (buttonText === "2") {
        input.value += buttonText;
    } else if (buttonText === "1") {
        input.value += buttonText;
    } else if (buttonText === "0") {
        input.value += buttonText;
    } else if (buttonText === ".") {
        input.value += buttonText;
    } else if (buttonText === "%") {
        input.value += buttonText;
    } else if (buttonText === "+") {
        input.value += buttonText;
    } else if (buttonText === "-") {
        input.value += buttonText;
    } else if (buttonText === "*") {
        input.value += buttonText;
    } else if (buttonText === "/") {
        input.value += buttonText;
    } else if (buttonText === "=") {
        createTxtElement();
    } else if (buttonText === "AC") {
        input.value = "";
        output.textContent = "";
    }
});