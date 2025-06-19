const num1Input = $('#num1'); 
const num2Input = $('#num2'); 
const operatorSelect = $('#operator'); 
const tryMeBtn = $('#tryMeBtn'); 

tryMeBtn.on('click', function() { 
    const num1 = parseInt(num1Input.val()); 
    const num2 = parseInt(num2Input.val()); 
    const operator = operatorSelect.val(); 

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert("Error :("); 
        console.log("Error :("); 
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("It's over 9000!"); 
                console.log("It's over 9000!"); 
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            if (num2 === 0) {
                alert("It's over 9000!"); 
                console.log("It's over 9000!"); 
                return;
            }
            result = num1 % num2;
            break;
        default:
            alert("Invalid operator!"); 
            console.log("Invalid operator!"); 
            return;
    }

    alert("Result: " + result);
    console.log("Result: " + result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000); 