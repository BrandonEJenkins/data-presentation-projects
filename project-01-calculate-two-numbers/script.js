const calculateBtn = document.getElementById('calculate');
const resultEl = document.getElementById('result-output');
const num1 = document.getElementById('number-one');
const num2 = document.getElementById('number-two');
const summaryNum1 = document.getElementById('summary-num1');
const summaryNum2 = document.getElementById('summary-num2');
const summaryOperation = document.getElementById('summary-operation');


calculateBtn.addEventListener('click', (e) => calc(e));

function calc(e) {
  e.preventDefault();

  n1 = parseInt(num1.value);
  n2 = parseInt(num2.value);

  var operator = document.getElementById('operators').value;

  if(operator === '+') {
    resultEl.innerText = n1+n2;
    summaryNum1.innerText = n1;
    summaryNum2.innerText = n2;

    summaryOperation.innerText = 'Addition';
  }
  if(operator === '-') {
    resultEl.innerText = n1-n2;
    summaryNum1.innerText = n1;
    summaryNum2.innerText = n2;
    summaryOperation.innerText = 'Subtract';
  }
  if(operator === '/') {
    resultEl.innerText = n1/n2;
    summaryNum1.innerText = n1;
    summaryNum2.innerText = n2;
    summaryOperation.innerText = 'Division';
  }
  if(operator === '*') {
    resultEl.innerText = n1*n2;
    summaryNum1.innerText = n1;
    summaryNum2.innerText = n2;
    summaryOperation.innerText = 'Multiplication';
  }

  setTimeout(() => {

    num1.value = '';
    num2.value = '';
    summaryNum1.innerText = '';
    summaryNum2.innerText = '';
    summaryOperation.innerText = '';
    resultEl.innerText = '';
    console.log(n1, n2);
  }, 5000);
}