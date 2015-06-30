var calculator = document.querySelector('#calculator');
var readout = document.querySelector('#readout');
var numButtons = document.querySelectorAll('.btn-num');
var btnClear = document.querySelector('#btn-clear');

//btn-operator
var btnPlus = document.querySelector('#btn-plus');

//btn-equals
var btnEquals = document.querySelector('#btn-equals');

//button functions
function input(){
    readout.innerHTML += this.innerHTML;
}

function reset() {
    readout.innerHTML = "";
}

function equals() {
    //using eval() method;
    //readout.innerHTML = eval(readout.innerText);
}

for(i = 0; i < numButtons.length; i ++) {
    numButtons[i].addEventListener('click',input);
}



btnPlus.addEventListener('click',input);
btnEquals.addEventListener('click',equals);

btnClear.addEventListener('click',reset);