//vertical calc consts
const buttonNumbers = document.querySelectorAll('.number_item'), // All button without 'AC' and '='
      inputMonitor = document.querySelector('#input-monitor'), // Calc monitor
      resultMonitor = document.querySelector('#result-monitor'),
      buttonClean = document.querySelector('.clean-button'), // 'AC' button
      buttonEquals = document.querySelector('.equals-button'), // '=' button 
      buttonBackspace = document.querySelector('.backspace-button'); // backsapce button

// horizontal calc consts
const rotateButton = document.querySelector('.rotate-button');

for (buttonNumber of buttonNumbers) {
    buttonNumber.addEventListener('click', function () {
        if (this.value == '÷') {
            inputMonitor.value = inputMonitor.value + '/';
        } else if (this.value == '×') {
            inputMonitor.value = inputMonitor.value + '*';
        }else {
            inputMonitor.value = inputMonitor.value + this.value; // Display a number to the calcMonitor
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


rotateButton.addEventListener('click', function () {
    document.querySelector('.content').classList.toggle('active-horizontal');
    document.querySelector('.content__formulas').classList.toggle('visible');
})