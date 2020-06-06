const buttonNumbers = document.querySelectorAll('.number_item'), // All button without 'AC' and '='
      inputMonitor = document.querySelector('#display'), // Calc monitor
      buttonClean = document.querySelector('.clean-button'), // 'AC' button
      buttonEquals = document.querySelector('.equals-button'); // '=' button 

for (buttonNumber of buttonNumbers) {
    buttonNumber.addEventListener('click', function () {
        inputMonitor.value = inputMonitor.value + this.value; // Display number to calcMonitor
    })
}

buttonClean.addEventListener('click', function () {
    inputMonitor.value = ''; // clean calcMonitor
})
buttonEquals.addEventListener('click', function () {
    inputMonitor.value = eval(inputMonitor.value); // Computes expression
})

