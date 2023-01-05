console.log('Welcome to calculator app!')

class Calculator {
  constructor(preCalcTextElement, curCalcTextElement) {
    this.preCalcTextElement = preCalcTextElement
    this.curCalcTextElement = curCalcTextElement
    this.clear()
  }

  clear() {
    this.preCalc = ''
    this.curCalc = ''
    this.operation = undefined
    this.updateDisplay()
  }

  delete() {
    this.curCalc = this.curCalc.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.curCalc.includes('.')) return
    this.curCalc = this.curCalc.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.curCalc === '') return
    if (this.preCalc !== '') {
      this.compute()
    }
    this.operation = operation
    this.preCalc = this.curCalc.toString() + ' ' + this.operation.toString()
    this.curCalc = ''
  }

  compute() {
    let computation = 0
    const prev = parseFloat(this.preCalc)
    const current = parseFloat(this.curCalc)

    if (isNaN(prev) || isNaN(current)) return

    switch (this.operation) {
      case '➕':
        computation = prev + current
        break
      case '➖':
        computation = prev - current
        break
      case '✳︎':
        computation = prev * current
        break
      case '➗':
        computation = prev / current
        break
      default:
        return
    }
    this.curCalc = computation
    this.operation = undefined
    this.preCalc = ''
  }

  updateDisplay(number) {
    this.curCalcTextElement.innerText = this.curCalc
    this.preCalcTextElement.innerText = this.preCalc
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const preCalcTextElement = document.querySelector('[data-pre-calc]')
const curCalcTextElement = document.querySelector('[data-cur-calc]')

const calculator = new Calculator(preCalcTextElement, curCalcTextElement)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

allClearButton.addEventListener('click', () => {
  calculator.clear()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})
