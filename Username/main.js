
document.getElementById("submit").onclick = printUsername;
document.getElementById("showpassword").onclick = printPassword;

function printUsername() {
    const username = document.getElementById("username").value;

    document.getElementById("heading").innerText = "Hello, " + username + "!";
}

function printPassword() {
    const password = document.getElementById("password").value;

    document.getElementById("message").innerText = "Your password is: " + password;
}