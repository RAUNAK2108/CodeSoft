const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const num = button.getAttribute("data-num");
        const op = button.getAttribute("data-op");

        // If number clicked
        if (num) {
            currentInput += num;
            display.textContent = currentInput;
        }

        // If operator clicked
        if (op) {
            if (currentInput === "") return;
            operator = op;
            previousInput = currentInput;
            currentInput = "";
        }
    });
});

// Equal button
document.getElementById("equal").addEventListener("click", () => {
    if (currentInput === "" || previousInput === "" || operator === "") return;

    let result = 0;

    // Basic calculation
    if (operator === "+") {
        result = Number(previousInput) + Number(currentInput);
    } else if (operator === "-") {
        result = Number(previousInput) - Number(currentInput);
    } else if (operator === "*") {
        result = Number(previousInput) * Number(currentInput);
    } else if (operator === "/") {
        result = Number(previousInput) / Number(currentInput);
    }

    display.textContent = result;
    currentInput = result.toString();
    operator = "";
    previousInput = "";
});

// Clear button
document.getElementById("clear").addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.textContent = "0";
});
