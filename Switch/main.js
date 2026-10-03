let grade = prompt("Enter your grade: ");
let result;

switch (true){
    case grade >= 90:
        result = "A";
        break;
    case grade >= 80:
        result = "B";
        break;
    case grade >= 70:
        result = "C";
        break; 
    case grade >= 60:
        result = "D";
        break;
    default:
        result = "F";
        break;
}

alert(`Your grade is: ${result}`);