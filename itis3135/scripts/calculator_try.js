window.onload = function () {
    let calculationCompleted = false;

    const display = document.querySelector('input[name="textNumber"]');
    display.value = '0';


    function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }

    // number input buttons
    document.querySelectorAll('.num, .decimal, .operator').forEach(button => {
        button.addEventListener('click', function () {
            const btnValue = this.textContent || this.innerText;

            if (calculationCompleted && !this.classList.contains('decimal') && !this.classList.contains('operator')) {
                display.value = btnValue;
                calculationCompleted = false; // reset
            } else if (display.value === '0' && !this.classList.contains('decimal') && !this.classList.contains('operator')) {
                display.value = btnValue;
            } else if (this.classList.contains('operator')) {
                if (isOperator(display.value[display.value.length - 1])) {
                    // remove last operator
                    display.value = display.value.substring(0, display.value.length - 1);
                }
                display.value += btnValue; // add neww operator
            } else {
                display.value += btnValue;
            }
        });
    });

    function isOperator(char) {
        return ['+', '-', 'x', '÷'].includes(char);
    }



    // input/output clear button
    document.querySelector('.clear').addEventListener('click', function () {
        display.value = '0';
    });

    // equals button
    document.querySelector('.equals').addEventListener('click', function () {
        try {
            let expression = display.value.replace('x', '*').replace('÷', '/');
            display.value = eval(expression);
            calculationCompleted = true;
        } catch (e) {
            display.value = "Error";
        }
    });
}