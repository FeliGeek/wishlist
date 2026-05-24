console.log("Array");

const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

let array = [];

button.addEventListener("click", function(){
    let text = input.value;
    array.push(text);
    showText();
});

function showText(){
    ul.innerHTML = "";
    array.forEach(function(element, indice){
        let li = document.createElement("li");
        li.textContent = element;

        let boton = document.createElement("button");
        boton.textContent = "❌";
        boton.addEventListener("click",function(){
            array.splice(indice, 1);
            showText();
        });

        li.appendChild(boton);
        ul.appendChild(li);
    });
};