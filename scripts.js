let operation = undefined
let currentOperand = ``
let lastOperand = ``
const currentOperandTextElement = document.getElementByClassName("current-operand")
const lastOperandTextElement = document.getElementByClassName("last-operand")
const button = document.querySelectorAll(button)
const numberBtns = document.getElementsByClassName("number")
const operationBtns = document.getElementsByClassName("operation")
const clear = document.getElementByClassName("clear")
const del = document.getElementByClassName("delete")
const equals = document.getElementByClassName("equals")

button.addEventListener("click", function() {
    const btnValue = button.innertext
    currentOperandTextElement.textContent += 1 
})

function chooseOperation() {

}

function clear() {
    let operation = undefined
    let currentOperand = ``
    let lastOperand = ``
}

function del() {

}

function caculate() {

}

function renderOperandText() {

}

function appendNumber() {

}

function updateDisplay() {

}
