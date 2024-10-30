// CALCULATOR PROGRAM

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
    // display.value = display.value + input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{

        display.value = eval(display.value);
        
    }
    catch(error){
        alert(error)
        clearDisplay()
    }
}