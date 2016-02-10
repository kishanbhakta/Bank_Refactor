var checking = document.querySelectorAll("#deposit1, withdraw1");
var retirement = document.querySelectorAll("#deposit2, #withdraw2");

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
    checking.addEventListener('click', checkingAcct);
    updateDisplay();
  };

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
    retirement.addEventListener('click', retirementAcct);
    updateDisplay();
  };


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


