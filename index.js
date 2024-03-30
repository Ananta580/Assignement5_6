amountFlagText = "USD";
altAmountFlagText = "CAD";

amountFlag = "us.png";
altAmountFlag = "ca.png";

conversionRate = 1.35;

document.getElementById("amountFlagText").innerText = amountFlagText;
document.getElementById("altAmountFlagText").innerText = altAmountFlagText;
document.getElementById("amountFlag").src = amountFlag;
document.getElementById("altAmountFlag").src = altAmountFlag;

function exchangeFlag() {
  if (amountFlagText == "USD") {
    amountFlagText = "CAD";
    altAmountFlagText = "USD";
    amountFlag = "ca.png";
    altAmountFlag = "us.png";
    conversionRate = 0.74;
  } else {
    amountFlagText = "USD";
    altAmountFlagText = "CAD";
    amountFlag = "us.png";
    altAmountFlag = "ca.png";
    conversionRate = 1.35;
  }
  document.getElementById("amountFlagText").innerText = amountFlagText;
  document.getElementById("altAmountFlagText").innerText = altAmountFlagText;
  document.getElementById("amountFlag").src = amountFlag;
  document.getElementById("altAmountFlag").src = altAmountFlag;
}

function convertCurrency() {
  const amountInput = document.getElementById("amountId").value;

  // Validating input
  if (amountInput === "" || isNaN(amountInput)) {
    alert("Please enter a valid amount.");
    return;
  }

  const altAmountResult = parseFloat(amountInput) * conversionRate;
  document.getElementById("altAmountId").value = altAmountResult;
}

function reset() {
  document.getElementById("amountId").value = "";
  document.getElementById("altAmountId").value = "";
}
