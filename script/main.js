const buttonNumbers = document.querySelectorAll('.number_item'), // All button without 'AC' and '='
      inputMonitor = document.querySelector('#display'), // Calc monitor
      buttonClean = document.querySelector('.clean-button'), // 'AC' button
      buttonEquals = document.querySelector('.equals-button'), // '=' button 
      buttonBackspace = document.querySelector('.backspace-button'); // backsapce button

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
    inputMonitor.value = ''; // clean calcMonitor
})
buttonEquals.addEventListener('click', function () {
    inputMonitor.value = eval(inputMonitor.value); // Computes expression
})
buttonBackspace.addEventListener('click', function() {
    inputMonitor.value = inputMonitor.value.substring(0, inputMonitor.value.length-1); // Delete the last symbol
})
