const MSG_NUM1 = "Please, enter the first number : ";
const MSG_NUM2 = "Please, enter the second number : ";
const MSG_OPERATOR = "Please, enter the operator : ";
const MSG_ERROR = "Error :/"

//first number
let num1 = null;
let entered= '';
do {
    const input1 = prompt(MSG_NUM1, entered);
    if(isNumber(input1)){
        alert(MSG_ERROR);
        entered = input1;
    }
    else num1 = +input1;
} while(num1 == null);

//second number
let num2 = null;
entered = '';
do {
    const input2 = prompt(MSG_NUM2, entered);
    if(isNumber(input2)){
        alert(MSG_ERROR);
        entered = input2;
    }
    else num2 = +input2;
} while(num2 == null);

//operator
let operator = null;
entered = '';
do {
    const input3 = prompt(MSG_OPERATOR, entered);
    if (!isOperator(input3)){
        alert(MSG_ERROR);
        entered = input3;
    }
    else operator = input3;
} while (operator == null);

//function checks if the input is number
function isNumber(num){
    return (num == null || num === '' || isNaN(+num) || /^[ ]+$/.test(num));
}

//function checks if the operator is true
function isOperator (oper){
    return (oper == "+" || oper == "-" || oper == "*" || oper == "/");
}

//main function; does the operation
function operation (num1,num2,oper) {
    switch (oper) {
        case "+" :
            alert(num1 + num2);
            break;
        case "-" :
            alert(num1 - num2);
            break;
        case "*" :
            alert(num1 * num2);
            break;
        case "/" :
            alert(num1 / num2);
            break;
    }
}

operation(num1, num2, operator);