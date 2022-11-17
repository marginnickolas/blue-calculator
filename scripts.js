let operation = undefined
let currentOperand = ``
let lastOperand = ``
const currentOperandTextElement = document.getElementsByClassName("current-operand")
const lastOperandTextElement = document.getElementsByClassName("last-operand")
const button = document.querySelectorAll("button")
const numberBtns = document.getElementsByClassName("number")
const operationBtns = document.getElementsByClassName("operation")
const clr = document.getElementsByClassName("clear")
const del = document.getElementsByClassName("delete")
const equals = document.getElementsByClassName("equals")

clr.addEventListener("click", function() {
    const btnValue = button.innertext
    currentOperandTextElement.textContent = "4" 
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
