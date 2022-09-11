var btntranslate = document.querySelector(".btn-translate");
var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector(".txt-output");

function eventListenerHandler(){
    console.log("click! your input was: " + txtinput.value);
    txtoutput.innerText = "click! your input was: " + txtinput.value;
}

btntranslate.addEventListener('click', eventListenerHandler);
