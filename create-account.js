function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      else {
        return `$${amount}`;
      }
    },
    deposit(inputPin, depositAmount) {
      if (inputPin === pin) {
        amount += depositAmount;
        return (
          "Succesfully deposited $" +
          depositAmount +
          ". Current balance: $" +
          amount +
          "."
        );
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (inputPin, withdrawAmount) {
      if (inputPin === pin) {
        if (withdrawAmount <= amount) {
          amount -= withdrawAmount;
          return (
            "Succesfully withdrew $" +
            withdrawAmount +
            ". Current balance: $" +
            amount +
            "."
          );
        } else {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

module.exports = { createAccount };
