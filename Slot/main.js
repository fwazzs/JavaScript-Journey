const num1 = document.getElementById("num-1");
const num2 = document.getElementById("num-2");
const num3 = document.getElementById("num-3");
const congs = document.getElementById("yey");
const roll = document.getElementById("rolling");
const min = 1, max = 6;

let random1, random2, random3;

roll.onclick = rollingTime;

function rollingTime () {
    random1 = Math.floor(Math.random() * max) + min;
    random2 = Math.floor(Math.random() * max) + min;
    random3 = Math.floor(Math.random() * max) + min;

    num1.textContent = random1;
    num2.textContent = random2;
    num3.textContent = random3;

    if (random1 == random2 && random2 == random3) {
        congs.textContent = "JEKPOT!!!!";
    } else {
        congs.textContent = "";
    }
}