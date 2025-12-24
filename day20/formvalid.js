function formvalidation() {

    alert("Validation working"); // test

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";

    let isValid = true;

    // Patterns
    let namePattern = /^[A-Za-z ]{2,30}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mobilePattern = /^(?:\+91)?[6789]\d{9}$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,}$/;

    // Name validation
    if (!namePattern.test(name)) {
        document.getElementById("nameError").innerHTML = "Invalid name";
        isValid = false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email";
        isValid = false;
    }

    // Mobile validation
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Invalid mobile number";
        isValid = false;
    }

    // Password validation
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must be 8+ chars, include uppercase, lowercase, number & special char";
        isValid = false;
    }

    // Confirm password
    if (password !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}