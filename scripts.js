class Caculator{
    constructor(lastOperand, currentOperand) {
        this.lastOperand = lastOperand
        this.currentOperand = currentOperand
        this.clear()
    }
    
    chooseOperation(operation) {

    }

    appendNumber(number) {

    }

    clear() {
        this.lastOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    del() {

    }

    compute() {

    }

    updateDisplay() {

    }
} 

const numberBtns = document.querySelectorAll(".number")
const operationBtns = document.querySelectorAll(".operation")
const clearBtn = document.querySelector(".clear")
const delBtn = document.querySelector(".delete")
const lastOperand = document.querySelector("#last-operand")
const currentOperand = document.querySelector("#current-operand")
const caculator = new Caculator(lastOperand, currentOperand)

numberBtns.addEventListener("click", function() {
    console.log(button.textContent)
})