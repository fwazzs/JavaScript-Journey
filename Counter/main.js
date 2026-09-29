const Increase = document.getElementById("increase");
const Decrease = document.getElementById("decrease");
const Reset = document.getElementById("reset");
const Counter = document.getElementById("Counter");

let count = 0;

Increase.onclick = increaseCount; //While button is clicked, the function increaseCount will be called.
Decrease.onclick = decreaseCount; //While button is clicked, the function decreaseCount will be called.
Reset.onclick = resetCount; //While button is clicked, the function resetCount will be called.

function increaseCount() {
    count++;
    return Counter.textContent = count;
}

function decreaseCount() {
    count--;
    return Counter.textContent = count;
}

function resetCount() {
    count = 0;
    return Counter.textContent = count;
}