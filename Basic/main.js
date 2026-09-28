
let a,b;

a = Number(prompt("Enter first number: "));
b = Number(prompt("Enter second number: "));

document.getElementById("p1").textContent = "The sum of " + a + " and " + b + " is: " + sum(a, b) + ".";
document.getElementById("p2").textContent = "The difference of " + a + " and " + b + " is: " + subtract(a, b) + ".";

function sum (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}