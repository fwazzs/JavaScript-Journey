let temp = prompt("Enter a temperature in Celsius:");

if (temp < 0) {
    console.log("It's freezing!");
} else if (temp >= 0 && temp < 20) {
    console.log("It's cold.");
} else if (temp >= 20 && temp < 30) {
    console.log("It's warm.");
} else {
    console.log("It's hot.");
}

/*
Operators used:
       < (less than)
       >= (greater than or equal to)
       && (logical AND)
       || (logical OR)
       ! (logical NOT)
*/