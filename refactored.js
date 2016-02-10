// Find the button elements and store them in checking and retirement variables.
var checkingDepositBtn = document.querySelector("#deposit1");
console.log(checkingDepositBtn);
var checkingWithdrawBtn = document.querySelector("#withdraw1");
console.log(checkingWithdrawBtn);
var retirementDepositBtn = document.querySelector("#deposit2");
console.log(retirementDepositBtn);
var retirementWithdrawBtn = document.querySelector("#withdraw2");
console.log(retirementWithdrawBtn);


var checkingBalance = [];
var balance1 = 0;
var balance2 = 0;

//Create a function for Checking Account and munipulate balance total from amount deposited
var checkingAcct = function() {
    var amount = document.getElementById("amount1").value;
    amount = parseInt(amount);

    //Develope if...else statements to add amount value when deposited or substract amount value when withdrawing
    function depositCheckingAcct() {
        balance1 = amount + balance1;
        checkingBalance.push("balance1");
    console.log(balance1);
    }
    console.log(checkingBalance);
    function withdrawCheckingAcct() {
      if(amount <= balance1) {
        balance1 = balance1 - amount;
        checkingBalance.push(balance1);
    console.log(balance1);
      }
    console.log(checkingBalance);
    }
    updateDisplay();
};
checkingDepositBtn.addEventListener('click', checkingAcct);
checkingWithdrawBtn.addEventListener('click', checkingAcct);

//Create a function for Retirement Account and munipulate balance total from amount deposited
var retirementAcct = function() {
    var amount = document.getElementById("amount2").value;
    amount = parseInt(amount);

    //Develope if...else statements to add amount value plus complimentary $10 from the bank when deposited or substract amount value when withdrawing
    function depositRetirementAcct() {
        if (amount >= balance2) {
            balance2 = amount + balance2 + 10;
        } else(amount <= balance2)
        balance2 = balance2 - amount;
    }
    updateDisplay();
};
retirementDepositBtn.addEventListener('click', retirementAcct);
retirementWithdrawBtn.addEventListener('click', retirementAcct);

function updateDisplay(balance) {
    if (balance1 <= 0)
        document.getElementById("balance1").className = "zero";
    else
        document.getElementById("balance1").className = "";

    if (balance2 <= 0)
        document.getElementById("balance2").className ="zero";
    else
        document.getElementById("balance2").className = "";

    var bal1Element = document.getElementById("balance1");
        bal1Element.innerHTML = "$" + checkingBalance;
    var bal2Element = document.getElementById("balance2");
        bal2Element.innerHTML = "$" + balance2;
    var amnt1Element = document.getElementById('amount1').value;
    var amnt2Element = document.getElementById('amount2').value;
};
