var calculator = document.querySelector('#calculator');
var readout = document.querySelector('#readout');
var numButtons = document.querySelectorAll('.btn-num');
var btnClear = document.querySelector('#btn-clear');

//btn-operator
var btnPlus = document.querySelector('#btn-plus');

//btn-equals
var btnEquals = document.querySelector('#btn-equals');

var currentOperation;

//button functions
function input(){
    readout.innerHTML += this.innerHTML;
    currentOperation += this.val;
    //console.log('The value of this is ' + this.val);
}

function reset() {
    readout.innerHTML = "";
}

//addition function
function addThis(firstVal,secondVal){
    //use this function as the 2nd index of a 3-index array, where the 1st and 2nd indeces are the values being passed to this function.
}

function equals() {
    //using eval() method;
    //readout.innerHTML = eval(readout.innerText);
}

for(i = 0; i < numButtons.length; i ++) {
    numButtons[i].addEventListener('click',input);
    numButtons[i].val = i;
}



btnPlus.addEventListener('click',input);
btnEquals.addEventListener('click',equals);

btnClear.addEventListener('click',reset);