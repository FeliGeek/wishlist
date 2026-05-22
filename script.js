const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul");

let listado = [];

button.addEventListener("click",function(){
    let texto = input.value;
    listado.push(texto);
    mostrarListado();
});

function mostrarListado (){
    ul.innerHTML = "";
    listado.forEach(function(elemento){
        let li = document.createElement("li");
        li.textContent = elemento;
        ul.appendChild(li);
    });
};