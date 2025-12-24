document.getElementById("login-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const mobileNumber = document.getElementById("mobile-number").value;
        const pinNumber = document.getElementById("pin-number").value;

        // Validation

        if (mobileNumber.length === 11 && !isNaN(mobileNumber)) {
            
            if (pinNumber.length === 4) {
                window.location.href = "/src/page/home.html"
            }
            else {
                
                alert('Pin must be 4 digit');
            }
        }

        else {
            alert("First Type only 11 digit mobile number");
        }
    })