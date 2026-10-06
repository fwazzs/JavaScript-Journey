/*
while (username == "" || username == null) {
    username = prompt("Please enter your username:");
}

do {
    username = prompt("Please enter your username:");
} while (username == "" || username == null);

console.log(`Your username is: ${username}`);
*/


let Login = false;

let username,password;

while (!Login) {
    username = prompt("Please enter your username:");
    password = prompt("Please enter your password:");

    if (username === "admin" && password === "1234") {
        Login = true;
        console.log("Login successful!");
    } else {
        console.log("Invalid username or password. Please try again.");
    }
}