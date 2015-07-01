// html elements
var calculator = document.querySelector("#calculator");
var readout = document.querySelector("#readout");
var btnsNum = document.querySelectorAll(".btn-num");

var btnPlus = document.querySelector('#btn-plus');
var btnMinus = document.querySelector('#btn-minus');
var btnMultiply = document.querySelector('#btn-multiply');
var btnDivide = document.querySelector('#btn-divide');
var btnEquals = document.querySelector('#btn-equals');
var btnClear = document.querySelector('#btn-clear');


//calculation array
var calcArray = ['','',''];

var recordNum = 0;

for(i = 0; i < btnsNum.length; i ++) {
    btnsNum[i].addEventListener('click', input);
    btnsNum[i].val = parseFloat(btnsNum[i].innerHTML);
}
btnsNum[10].val = '.';

function input(){
    if(isNaN(readout.innerHTML)) {
        readout.innerHTML = '';
    }
    readout.innerHTML += this.val;
    if(recordNum == 0){
        calcArray[0] += this.val;
    } else {
        calcArray[2] += this.val;
    }
    console.log(calcArray);
}

///////

function setOperator() {
    calcArray[1] = this.operator;
    recordNum = 2;

    readout.innerHTML = this.innerHTML;

    //readout.innerHTML = '';
    console.log(calcArray);
}


////////// Operations: ////////////
function sum(num1,num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function difference(num1,num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function divisionOf(num1,num2) {
    return parseFloat(num1) / parseFloat(num2);
}

function multiplicationOf(num1,num2) {
    return parseFloat(num1) * parseFloat(num2);
}
////////////// EVALUATE ////////////////////

function evaluate() {
    var result = calcArray[1](calcArray[0],calcArray[2]);
    console.log(result);
    readout.innerHTML = result;
}
btnEquals.addEventListener('click',evaluate);

////////////// CLEAR ////////////////////
function clearCalc() {
    recordNum = 0;
    calcArray = ['','',''];
    readout.innerHTML = '';
}

btnClear.addEventListener('click', clearCalc);


//////////////// Assign Operators to buttons //////////////////

btnPlus.operator = sum;
btnPlus.addEventListener('click',setOperator);

btnMinus.operator = difference;
btnMinus.addEventListener('click',setOperator);

btnMultiply.operator = multiplicationOf;
btnMultiply.addEventListener('click',setOperator);

btnDivide.operator = divisionOf;
btnDivide.addEventListener('click',setOperator);

//////////////////////////////////