// Logout Button

document.getElementById("logout-btn")
    .addEventListener('click', function () {
        window.location.href = "index.html"
    })


document.getElementById("add-money-box")
    .addEventListener('click', function () {
        toggle('add-money-section');
    })
document.getElementById("cash-out-box")
    .addEventListener('click', function () {
        toggle('cash-out-section');
    })

// Add Money
document.getElementById("add-money")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = getValueById("account-number");
        const pinNumber = getValueById("pinn-number");
        const totalAmount = totalAmountById("total-money");
        const addAmount = getNumberById("add-amount");

        if (accountNumber.length !== 11 || isNaN(accountNumber)) {
            return alert("Type 11 digit account number");
        }
        if (pinNumber.length !== 4) {
            return alert("Pin must be 4 digit");
        }
        if (addAmount > 0) {
            const sum = totalAmount + addAmount;
            document.getElementById("total-money").innerText = sum;
            clearInputsById("account-number", "pinn-number", "add-amount");
            alert(`${addAmount} Tk added Successfully`);
        }
        else {
            return alert("amount must be positive number");
        }

    })

// CashOut

document.getElementById("withdraw-money")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const agentNumber = getValueById("agent-number");
        const pinNumber = getValueById("pinnn-number");
        const totalAmount = totalAmountById("total-money");
        const withdrawAmount = getNumberById("withdraw-amount");

        if (agentNumber.length !== 11 || isNaN(agentNumber)) {
            return alert("Type 11 digit agent number");
        }
        if (pinNumber.length !== 4) {
            return alert("Pin must be 4 digit");
        }
        if (withdrawAmount > 0) {
            const sum = totalAmount - withdrawAmount;
            document.getElementById("total-money").innerText = sum;
            clearInputsById("agent-number", "pinnn-number", "withdraw-amount");
            alert(`${withdrawAmount} Tk CashOut Successfully`);
        }
        else {
            return alert("amount must be positive number");
        }
    })