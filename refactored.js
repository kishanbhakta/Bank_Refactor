// Find the button elements and store them in checking and retirement variables.
var checkingDepositBtn = document.querySelector("#deposit1");
console.log(checkingDepositBtn);
var checkingWithdrawBtn = document.querySelector("#withdraw1");
console.log(checkingWithdrawBtn);
var retirementDepositBtn = document.querySelector("#deposit2");
console.log(retirementDepositBtn);
var retirementWithdrawBtn = document.querySelector("#withdraw2");
console.log(retirementWithdrawBtn);

// Set up Empty Arrays for Checking account and Retirement accounts
var checkingBalance = [];
var retirementBalance = [];

// Set balances for both accounts initially to 0
var balance1 = 0;
var balance2 = 0;
updateDisplay();

//Create a function for Checking Account and munipulate balance total from amount deposited
var depositCheckingAcct = function() {
    var amount = document.getElementById("amount1").value;
    amount = parseInt(amount);
    // Push value captured from input to checkingBalance Array
    checkingBalance.push(amount);
    // Add initial previous amount (a) with current amount (b)
    var sum = checkingBalance.reduce(function(a, b) {
        return a + b;
    }, 0);

    var bal1Element = document.getElementById("balance1");
    bal1Element.innerHTML = "$" + sum;

    // Clear out array
    checkingBalance = [];

    // Push new amount up
    checkingBalance.push(sum);

    console.log(checkingBalance);
    // run updateDisplay function to update DOM
    updateDisplay();
};
checkingDepositBtn.addEventListener('click', depositCheckingAcct);



//Create a function for Checking Account and munipulate balance total from amount withdrawn
function withdrawCheckingAcct(amount1) {
    var amount1 = document.getElementById("amount1").value;
    amount1 = parseInt(amount1);
    // Push value captured from input to checkingBalance Array
    checkingBalance.push(amount1);
    // Subtract previous amount(a) from current amount(b)
    var sum = checkingBalance.reduce(function(a, b) {
        return a - b;
    });

    var bal1Element = document.getElementById("balance1");
    bal1Element.innerHTML = "$" + sum;

    // Clear out array
    checkingBalance = [];

    // Push new amount up
    checkingBalance.push(sum);

    // run updateDisplay function to update DOM
    updateDisplay();
};
checkingWithdrawBtn.addEventListener('click', withdrawCheckingAcct);



//Create a function for Retirement Account and munipulate balance total from amount deposited
var depositRetirementAcct = function() {
    var amount = document.getElementById("amount2").value;
    amount = parseInt(amount);
    // Push value captured from input to retirementBalance Array
    retirementBalance.push(amount + 10);
    // Add initial previous amount (a) with current amount (b)
    var sum = retirementBalance.reduce(function(a, b) {
        return a + b;
    }, 0);

    var bal2Element = document.getElementById("balance2");
    bal2Element.innerHTML = "$" + sum;

    // Clear out array
    retirementBalance = [];

    // Push new amount up
    retirementBalance.push(sum);

    // run updateDisplay function to update DOM
    updateDisplay();
};
retirementDepositBtn.addEventListener('click', depositRetirementAcct);



//Create a function for Retirement Account and munipulate balance total from amount withdrawn
function withdrawRetirementAcct(amount2) {
    var amount2 = document.getElementById("amount2").value;
    amount2 = parseInt(amount2);
    // Push value captured from input to retirementBalance Array
    retirementBalance.push(amount2);
    // Subtract previous amount(a) from current amount(b)
    var sum = retirementBalance.reduce(function(a, b) {
        return a - b;
    });

    var bal2Element = document.getElementById("balance2");
    bal2Element.innerHTML = "$" + sum;

    // Clear out array
    retirementBalance = [];

    // Push new amount up
    retirementBalance.push(sum);

    // run updateDisplay function to update DOM
    updateDisplay();
};
retirementWithdrawBtn.addEventListener('click', withdrawRetirementAcct);


// Update Account Elements
function updateDisplay(balance) {
    if (checkingBalance <= 0)
        document.getElementById("balance1").className = "zero";
    else
        document.getElementById("balance1").className = "balance";

    if (retirementBalance <= 0)
        document.getElementById("balance2").className = "zero";
    else
        document.getElementById("balance2").className = "balance";

    // Clear out input fields after each deposit of withdraw
    var amnt1Element = document.getElementById('amount1').value = "";
    var amnt2Element = document.getElementById('amount2').value = "";
};
