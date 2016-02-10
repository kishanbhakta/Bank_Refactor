// Find the button elements and store them in checking and retirement variables.
var checkingDepositBtn = document.querySelectorAll("#deposit1");
console.log(checkingDepositBtn);
var checkingWithdrawBtn = document.querySelectorAll("#withdraw1");
console.log(checkingWithdrawBtn);
var retirementDepositBtn = document.querySelectorAll("#deposit2");
console.log(retirementDepositBtn);
var retirementWithdrawBtn = document.querySelectorAll("#withdraw2");
console.log(retirementWithdrawBtn);


//Create a function for Checking Account and munipulate balance total from amount deposited
  var checkingAcct = function () {
    var balance1 = 0;
    var amount = document.getElementById("amount1").val();
        amount = parseInt(amount);

    //Develope if...else statements to add amount value when deposited or substract amount value when withdrawing
    function depositCheckingAcct() {
      if(amount >= balance1){
        balance = amount + balance1;
      }
      else(amount <= balance1)
        balance1 = balance1 - amount;
    }
    console.log(amount);
    updateDisplay();
  };
    checkingDepositBtn.addEventListener('click', checkingAcct);

//Create a function for Retirement Account and munipulate balance total from amount deposited
  var retirementAcct = function () {
    var balance2 = 0;
    var amount = document.getElementById("amount2").val();
        amount = parseInt(amount);

    //Develope if...else statements to add amount value plus complimentary $10 from the bank when deposited or substract amount value when withdrawing
    function depositRetirementAcct() {
      if(amount >= balance2){
        balance2 = amount + balance2 + 10;
      }
      else(amount <= balance2)
        balance2 = balance2 - amount;
    }
    updateDisplay();
  };
    retirement.addEventListener('click', retirementAcct);


  function updateDisplay (balance) {
    if(balance1 <= 0)
      document.getElementById("balance1").addClass("zero");
    else
      document.getElementById("balance1").removeClass("zero");

    if(balance2 <= 0)
      document.getElementById("balance2").addClass("zero");
    else
      document.getElementById("balance2").removeClass("zero");

    document.getElementById('balance1').value("$" + balance1);
    document.getElementById('balance2').value("$" + balance2);
    document.getElementById('amount1').value("");
    document.getElementById('amount2').value("");

  };


