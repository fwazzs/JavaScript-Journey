let number,word,bol;

number = Number(prompt("Enter any number: "));
word = String(prompt("Enter any word: "));
bol = prompt("Enter 1 or 0 : ");

if (word == ""){
  word = null;
}

if (bol == 1){
  bol = true;
} else {
  bol = false;
}

for (let i = 0; i < 3; i++) {
  document.getElementById("p" + (i+1)).textContent = `The type of the ${[number, word, bol][i]} is: ${typeof [number, word, bol][i]}.`;
}