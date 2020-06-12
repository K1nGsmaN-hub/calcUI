//vertical calc consts
const buttonNumbers = document.querySelectorAll('.number_item'), // All button without 'AC' and '='
      inputMonitor = document.querySelector('#input-monitor'), // Calc monitor
      resultMonitor = document.querySelector('#result-monitor'),
      buttonClean = document.querySelector('.clean-button'), // 'AC' button
      buttonEquals = document.querySelector('.equals-button'), // '=' button 
      buttonBackspace = document.querySelector('.backspace-button'); // backsapce button

// horizontal calc consts
const buttonRotate = document.querySelector('.rotate-button'),
      buttonFormulas = document.querySelectorAll('.formula_item')
      buttonBrackets = document.querySelectorAll('.bracket');

Math.factorial = function (n) {
    if (n == 0) {
        return 1;
    } else {
        return Math.factorial(n-1)*n
    }
}

for (buttonNumber of buttonNumbers) {
    buttonNumber.addEventListener('click', function () {
        switch (this.value) {
            case '÷': 
                inputMonitor.value = inputMonitor.value + '/'; break;
            case '×': 
                inputMonitor.value = inputMonitor.value + '*'; break;
            default: 
                inputMonitor.value = inputMonitor.value + this.value;
        }
    })
}

buttonClean.addEventListener('click', function () {
    resultMonitor.value = '';
    inputMonitor.value = ''; // clean calcMonitor
})
buttonEquals.addEventListener('click', function () {
    resultMonitor.value = eval(inputMonitor.value); // Computes expression
    inputMonitor.value = inputMonitor.value + this.value;
})
buttonBackspace.addEventListener('click', function() {
    inputMonitor.value = inputMonitor.value.substring(0, inputMonitor.value.length-1); // Delete the last symbol
})

// Code for horizontal orintation
buttonRotate.addEventListener('click', function () {
    document.querySelector('.content').classList.toggle('active-horizontal');
    document.querySelector('.content__formulas').classList.toggle('visible');
})

for (buttonFormula of buttonFormulas) {
    buttonFormula.addEventListener('click', function () {
        switch (this.value) {
            case 'π':
                inputMonitor.value = inputMonitor.value + 'Math.PI'; break;
            case '!':
                inputMonitor.value = inputMonitor.value + 'Math.factorial('; break;
            case '√':
                inputMonitor.value = inputMonitor.value + 'Math.sqrt('; break;
            case 'xⁿ':
                inputMonitor.value = inputMonitor.value + '**'; break;
            default:
                inputMonitor.value = inputMonitor.value + 'Math.' + this.value + '(';
        }
    })
}

for (buttonBracket of buttonBrackets) {
    buttonBracket.addEventListener('click', function () {
        inputMonitor.value = inputMonitor.value + this.value;
    })
}