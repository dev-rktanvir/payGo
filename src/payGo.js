
// Js code For Login Button
document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();

    // Mobile & Pin Number
    const mobileNumber = document.getElementById("mobile-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if (mobileNumber.length !== 0 && mobileNumber.length === 11) {
        if (pinNumber.length !== 0 && pinNumber.length === 4) {
            window.location.href="/src/pages/home.html";
        } else {
            alert("Pin Number Must Be 4 Digit");
        }
    } else {
        alert("Mobile Number Must Be 11 Digit");
    }
})