// Logout Button

document.getElementById("logout-btn")
    .addEventListener('click', function () {
        window.location.href = "index.html"
    })

// Add Money
document.getElementById("add-money")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById("account-number").value;
        const pinNumber = document.getElementById("pinn-number").value;
        const totalAmount = parseFloat(document.getElementById("total-money").innerText);
        const addAmount = parseFloat(document.getElementById("add-amount").value);

        if (accountNumber.length === 11 && !isNaN(accountNumber)) {
            if (pinNumber.length === 4) {
                if (addAmount.length > 0) {
                    const newAmount = totalAmount + addAmount;
                    document.getElementById("total-money").innerText = newAmount;
                    document.getElementById("account-number").value = '';
                    document.getElementById("pinn-number").value = '';
                    document.getElementById("add-amount").value = '';
                    alert('Money Added Successfully');
                }
                else{
                    alert('add amount can not be 0');
                }
            }
            else {
                alert('Pin must be 4 digit');
            }
        }
        else {
            alert('Type 11 digit account number');
        }

    })