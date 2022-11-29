'use strict'

class Caculator{
    constructor(lastOperand, currentOperand) {
        this.lastOperand = lastOperand
        this.currentOperand = currentOperand
        this.clear()
    }
    
    chooseOperation(operation) {

    }

    appendNumber(number) {
        this.currentOperand = number
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
        this.currentOperand.textContent = this.currentOperand
    }
}

const operationBtns = document.querySelectorAll(".operation")
const clearBtn = document.querySelector(".clear")
const delBtn = document.querySelector(".delete")
const lastOperand = document.querySelector("#last-operand")
const currentOperand = document.querySelector("#current-operand")
const caculator = new Caculator(lastOperand, currentOperand)
const numberBtns = document.querySelectorAll(".number")

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", function() {
        //fix this
    })
}