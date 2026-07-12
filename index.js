const inputField = document.getElementById("display");
const btn = document.getElementById("buttons");

let num1 = 0;
let currentOp = "";
btn.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-num")){
        inputField.value += event.target.innerText;
    }
    else if(event.target.classList.contains("btn-op")){
        let clickedOp = event.target.id;
        if (clickedOp === "AC"){
            inputField.value = "";
            clickedOp = "";
            num1 = "";
        }
        else if (clickedOp === "="){
            let num2 = Number(inputField.value);
            let result = 0;
            if (currentOp === "+"){
                result = num1 + num2;
            } else if (currentOp === "-"){
                result = num1 - num2;
            } else if (currentOp === "*"){
                result = num1 * num2;
            } else if (currentOp === "/"){
                result = num1 / num2;
            }
            inputField.value = result;
        }
        else {
            num1 = Number(inputField.value);
            currentOp = clickedOp;
            inputField.value = "";
        }
    }
});