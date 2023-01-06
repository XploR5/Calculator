console.log('Welcome to calculator app!')

function zoom() {
  document.body.style.zoom = '100%'
}

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

  chooseOperation(operation, type) {
    if (this.curCalc === '' && type === 'normal') return
    if (this.preCalc !== '') {
      this.compute(type)
    }
    this.operation = operation
    this.preCalc = this.curCalc.toString() + ' ' + this.operation.toString()
    this.curCalc = ''
  }

  compute(type) {
    let computation = 0
    const prev = parseFloat(this.preCalc)
    const current = parseFloat(this.curCalc)

    const factorial = (n) => {
      if (n === 0 || n === 1) return 1
      for (let i = n - 1; i >= 1; i--) {
        n *= i
      }
      return n
    }

    // if (isNaN(prev) && type !== 'preOperation') return
    if (isNaN(current)) {
      if (this.operation === '!') {
        this.curCalc = factorial(prev)
        return
      }
      this.curCalc = prev
      this.operation = undefined
      this.preCalc = ''
      return
    }

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
      case '^':
        computation = Math.pow(prev, current)
        break
      case '!':
        this.curCalc = factorial(prev)
        break
      case '√':
        computation = Math.sqrt(current)
        break
      case 'sin':
        computation = Math.sin(current)
        break
      case 'cos':
        computation = Math.cos(current)
        break
      case 'tan':
        computation = Math.tan(current)
        break
      case 'log':
        computation = Math.log10(current)
        break
      default:
        return
    }
    this.curCalc = computation.toPrecision(5)
    this.operation = undefined
    this.preCalc = ''
  }

  updateDisplay() {
    this.curCalcTextElement.innerText = this.curCalc
    this.preCalcTextElement.innerText = this.preCalc
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const specialNumberButtons = document.querySelectorAll('[data-number-special]')

const operationButtons = document.querySelectorAll('[data-operation]')
const preOperationButtons = document.querySelectorAll('[data-pre-operation]')

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

specialNumberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(
      button.innerText === 'π'
        ? Math.PI.toPrecision(10)
        : Math.E.toPrecision(10)
    )
    calculator.updateDisplay()
  })
})

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText, 'normal')
    calculator.updateDisplay()
  })
})

preOperationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText, 'preOperation')
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
