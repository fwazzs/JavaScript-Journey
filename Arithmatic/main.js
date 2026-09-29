let a,b;

a = Number(prompt("Enter first number: "));
b = Number(prompt("Enter second number: "));

for (let i = 0; i < 6; i++){
  document.getElementById("p" + (i+1)).textContent = `The ${["sum","subtraction","multiplication","division","modulo","power"][i]} of ${a} and ${b} is: ${[sum(a,b),sub(a,b),mul(a,b),div(a,b),mod(a,b),pow(a,b)][i]}.`;
}

function sum (a,b){
    return a + b;
}

function sub (a,b){
    return a - b;
}

function mul (a,b){
    return a * b;
}

function div (a,b){
    return a / b;
}

function mod (a,b){
    return a % b;
}

function pow (a,b){
    return a ** b;
}