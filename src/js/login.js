document.getElementById("login-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mobileNumber = document.getElementById("mobile-number").value;
        const pinNumber = document.getElementById("pin-number").value;

        // Validation

        if (mobileNumber.length !== 11 || isNaN(mobileNumber)) {
            alert("Type only 11 digit number");
            return;
        }
        else if (pinNumber.length !== 4) {
            alert('Pin must be 4 digit');
            return;
        }
        else if(mobileNumber && pinNumber){
            window.location.href="/src/page/home.html"
        }
        else{
            alert("Fillup Mobile Number and Pin Number");
        }
    })