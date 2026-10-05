
let username = prompt("Enter your username : ");
/*
username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachar = username.slice(1);
extrachar = extrachar.toLowerCase();

username = letter + extrachar;
console.log(username);
*/

// String Chaining

username = username.trim();
username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);