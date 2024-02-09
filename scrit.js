document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you can add logic to validate the username and password, for example:
    if (username === "admin" && password === "password") {
        // Successful login
        document.getElementById("message").innerHTML = "Login successful!";
        document.getElementById("message").style.color = "green";
    } else {
        // Failed login
        document.getElementById("message").innerHTML = "Invalid username or password";
        document.getElementById("message").style.color = "red";
    }
});
