console.log('Welcome to the calculator APP!')

function fac(n) {
  if (n < 0) {
    return -1
  } else if (n == 0) {
    return 1
  } else {
    return n * fac(n - 1)
  }
}

function Sq(n) {
  return n * n
}

function Cu(n) {
  return n * n * n
}

function sqrt(n) {
  return Math.sqrt(n)
}

function sin(n) {
  return Math.sin(n)
}

function cos(n) {
  return Math.cos(n)
}

function tan(n) {
  return Math.tan(n)
}

function log10(n) {
  return Math.log10(n)
}

function log(n) {
  return Math.log(n)
}

function pow(n, m) {
  return Math.pow(n, m)
}

class Calculator {
  constructor(preCalculation, displayAnswer) {
    this.preCalculation = preCalculation
    this.displayAnswer = displayAnswer
    this.clear()
  }

  updateNumber(input) {
    this.preCalculation.innerText = this.preCalculation.innerText + input
  }

  updateSimpleOperation(input) {
    const lastChar = preCalculation.innerText.charAt(
      preCalculation.innerText.length - 1
    )

    if (
      lastChar === '+' ||
      lastChar === '-' ||
      lastChar === '*' ||
      lastChar === '/' ||
      lastChar === '.' ||
      lastChar === 'π' ||
      lastChar === 'e'
    ) {
      return
      console.log('double')
    }

    this.preCalculation.innerText = this.preCalculation.innerText + input
  }

  updateOperation(input) {
    switch (input) {
      case 'sin':
        this.preCalculation.innerText += 'sin('
        break
      case 'cos':
        this.preCalculation.innerText += 'cos('
        break
      case 'tan':
        this.preCalculation.innerText += 'tan('
        break
      case 'log':
        this.preCalculation.innerText += 'log10('
        break
      case 'ln':
        this.preCalculation.innerText += 'log('
        break
      case '√':
        this.preCalculation.innerText += 'sqrt('
        break
      case 'π':
        this.preCalculation.innerText += '3.1415'
        break
      case 'e':
        this.preCalculation.innerText += '2.7182'
        break
      case 'Sq':
        this.preCalculation.innerText += 'Sq('
        break
      case 'Cu':
        this.preCalculation.innerText += 'Cu('
        break
      case 'pow':
        this.preCalculation.innerText += 'pow('
        break
      case '!':
        this.preCalculation.innerText += 'fac('
        break

      default:
        return
    }
  }

  clear() {
    this.preCalculation.innerText = ''
    this.displayAnswer.innerText = ''
  }

  delete() {
    this.preCalculation.innerText = this.preCalculation.innerText.slice(0, -1)
  }

  calculate() {
    displayAnswer.innerText = eval(preCalculation.innerText).toPrecision(5)
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const simpleOperationButtons = document.querySelectorAll(
  '[data-operation-simple]'
)
const operationButtons = document.querySelectorAll('[data-operation]')

const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const preCalculation = document.querySelector('[data-calculation]')
const displayAnswer = document.querySelector('[data-answer]')

preCalculation.innerText = 'preCalculation'
displayAnswer.innerText = 'displayAnswer'

const calculator = new Calculator(preCalculation, displayAnswer)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.updateNumber(button.innerText)
  })
})

simpleOperationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.updateSimpleOperation(button.innerText)
  })
})

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.updateOperation(button.innerText)
  })
})

allClearButton.addEventListener('click', () => {
  calculator.clear()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
})

equalsButton.addEventListener('click', () => {
  calculator.calculate()
})

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'Enter':
      calculator.calculate()
      break
    case '0':
      calculator.updateNumber('0')
      break
    case '1':
      calculator.updateNumber('1')
      break
    case '2':
      calculator.updateNumber('2')
      break
    case '3':
      calculator.updateNumber('3')
      break
    case '4':
      calculator.updateNumber('4')
      break
    case '5':
      calculator.updateNumber('5')
      break
    case '6':
      calculator.updateNumber('6')
      break
    case '7':
      calculator.updateNumber('7')
      break
    case '8':
      calculator.updateNumber('8')
      break
    case '9':
      calculator.updateNumber('9')
      break
    case '+':
      calculator.updateSimpleOperation('+')
      break
    case '-':
      calculator.updateSimpleOperation('-')
      break
    case '*':
      calculator.updateSimpleOperation('*')
      break
    case '/':
      calculator.updateSimpleOperation('/')
      break
    case '.':
      calculator.updateSimpleOperation('.')
      break
    case '(':
      calculator.updateNumber('(')
      break
    case ')':
      calculator.updateNumber(')')
      break
    case 'Backspace':
      calculator.delete()
      break
    case 'Delete':
      calculator.clear()
      break
    case 'Enter':
      calculator.calculate()
      break
    case 's':
      calculator.updateOperation('sin')
      break
    case 'c':
      calculator.updateOperation('cos')
      break
    case 't':
      calculator.updateOperation('tan')
      break
    case 'l':
      calculator.updateOperation('log')
      break
    case 'L':
      calculator.updateOperation('ln')
      break
    case 'S':
      calculator.updateOperation('Sq')
      break
    case 'C':
      calculator.updateOperation('Cu')
      break
    case 'p':
      calculator.updateSimpleOperation('pow')
      break
    case 'f':
      calculator.updateSimpleOperation('fac(')
      break
    case 'm':
      calculator.updateSimpleOperation('%')
      break
    case 'r':
      calculator.updateOperation('sqrt(')
      break
    case 'i':
      calculator.updateNumber('3.1415')
      break
    case 'e':
      calculator.updateNumber('2.7182')
      break
    default:
      return
  }
})

var buttons = document.getElementsByTagName('button')

Array.prototype.forEach.call(buttons, function (b) {
  b.addEventListener('click', createRipple)
})

function createRipple(e) {
  if (this.getElementsByClassName('ripple').length > 0) {
    this.removeChild(this.childNodes[1])
  }

  var circle = document.createElement('div')
  this.appendChild(circle)

  var d = Math.max(this.clientWidth, this.clientHeight)
  circle.style.width = circle.style.height = d + 'px'

  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px'
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px'

  circle.classList.add('ripple')
}
