const mButton = document.getElementById("check-btn"); // program submission button
const mInput = document.getElementById("text-input"); // program input element
const mResult = document.getElementById("result");    // program result element

function checkForPalindrome(string) {
    // ...
}

mButton.addEventListener("click", () => {
    // 1. get string value from input assign to varible 'data'
    // 2. if no input value set data to false, else set data to input value->toLowerCase
    let data = mInput.value != "" ? mInput.value.toLowerCase() : false;

    // if no data alert user, else check for palindrome
    if (!data) {
        alert("Please input a value");
    } else {
        checkForPalindrome(data);
    }
}); 
