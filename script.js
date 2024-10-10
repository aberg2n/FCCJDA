const mButton = document.getElementById("check-btn");
const mInput = document.getElementById("text-input");
const mResult = document.getElementById("result");

mButton.addEventListener("click", () => {
    // get string value from input, if no input return false, else return input 'toLowerCase'
    let data = mInput.value != "" ? mInput.value.toLowerCase() : false;
    if (!data) alert("Please input a value");

    // ...
}); 
