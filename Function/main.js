function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function evenOrOdd(num){
    if(num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4));   // Output: 6
console.log(evenOrOdd(7)); // Output: Odd