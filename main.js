var btntranslate = document.querySelector(".btn-translate");
var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector(".txt-output");

var url = "	https://api.funtranslations.com/translate/minion.json";

function urlConstructor(input){
    return url + "?" + "text=" + input;
}

function errorHandler(){
    alert("Something Wrong with the Server. Try again later.")
}

function eventListenerHandler(){
    var inputtxt = txtinput.value;
    fetch(urlConstructor(inputtxt))
    .then(response => response.json())
    .then(data => {
        var txttranslation = data.contents.translated
        txtoutput.innerText = txttranslation;
        })
    .catch(errorHandler);
}

btntranslate.addEventListener('click', eventListenerHandler);
