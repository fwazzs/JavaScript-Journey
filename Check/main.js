const checkbox = document.getElementById('myCheckbox');
const visa = document.getElementById('Visabtn');
const mastercard = document.getElementById('Masterbtn');
const paypal = document.getElementById('Paypalbtn');
const submitButton = document.getElementById('submitButton');
const subResult = document.getElementById('subResult');
const cardResult = document.getElementById('cardResult');

submitButton.onclick = function() {
    if (checkbox.checked) {
        subResult.textContent = "you are Subscribed";
    } else {
        subResult.textContent = "you are not Subscribed";
    }

    if (visa.checked) {
        cardResult.textContent = "Your payment method is Visa";
    } else if (mastercard.checked) {
        cardResult.textContent = "Your payment method is Mastercard";
    } else if (paypal.checked) {
        cardResult.textContent = "Your payment method is Paypal";
    } else {
        cardResult.textContent = "No payment method selected";
    }
}