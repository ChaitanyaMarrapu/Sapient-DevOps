function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function validateOrderForm() {
    let food = document.getElementById('food').value;
    let quantity = document.getElementById('quantity').value;
    let address = document.getElementById('address').value;

    if (food === "" || quantity === "" || address === "") {
        alert("All fields are required.");
        return false;
    }

    if (quantity <= 0) {
        alert("Quantity must be greater than zero.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
