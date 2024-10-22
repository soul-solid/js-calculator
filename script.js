const output = document.querySelector(".output");
const input = document.querySelector(".input");
const btns = document.querySelector(".btns");

btns.addEventListener("click", (event) => {
    let buttonText = event.target.textContent;
    let inputValue = input.value;
    
    function createTxtElement() {
        const text = document.createElement("span");
        text.classList.add("display-result");
        text.textContent = input.value;
        output.appendChild(text);
    };

    switch (buttonText) {
        case "9":
        case "8":
        case "7":
        case "6":
        case "5":
        case "4":
        case "3":
        case "2":
        case "1":
        case "0":
        case ".":
        case "%":
        case "+":
        case "-":
        case "*":
        case "/":
            input.value += buttonText;
            break;
        case "=":
            createTxtElement();
            break;
        case "AC":
            input.value = "";
            output.textContent = "";
            break;
        case "CE":
            input.value = "";
            break;
    }

    return inputValue;
});