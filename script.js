var dispaly = document.querySelector(".display");

function appendToDisplay(input){
    dispaly.value += input;
}

function clearDisplay(){
    dispaly.value = ""
}

function calculate(){
    try {
        dispaly.value = eval(dispaly.value)
    } catch (error) {
        dispaly.value = "Error"
    }
}