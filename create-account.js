function createAccount(pin, amount) {
    if (typeof pin !== "number" || typeof amount !== "number") {
        return "Invalid input";
    }
    if (pin.toString().length !== 4) {
        return "Invalid PIN";
    }
    if (amount < 0) {
        return "Invalid input";
    }
    return function (pin, amount) {
        return {
            checkBalance: function (pin) {
                if (pin === pin) {
                    return amount;
                } else {
                    return "Invalid PIN";
                }
            },
            deposit: function (pin, depositAmount) {
                if (pin === pin) {
                    amount += depositAmount;
                    return "Succesfully deposited $" + depositAmount + ". Current balance: $" + amount + ".";
                } else {
                    return "Invalid PIN";
                }
            },
            withdraw: function (pin, withdrawAmount) {
                if (pin === pin) {
                    if (withdrawAmount <= amount) {
                        amount -= withdrawAmount;
                        return "Succesfully withdrew $" + withdrawAmount + ". Current balance: $" + amount + ".";
                    } else {
                        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                    }
                } else {
                    return "Invalid PIN";
                }
            },
            changePin: function (pin, newPin) {
                if (pin === pin) {
                    pin = newPin;
                    return "PIN successfully changed!";
                } else {
                    return "Invalid PIN";
                }
            }
        };
    }
}

module.exports = { createAccount };
