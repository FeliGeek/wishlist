const input = document.getElementById("input");
const button = document.getElementById("button");
const article = document.getElementById("article");

let array = [];

button.addEventListener("click",function(){
    let text = input.value;
    array.push(text);
    saveText();
    showText();
});

function showText(){
    article.innerHTML = "";
    array.forEach(function(item,index){
        let div = document.createElement("div");
        div.textContent = "- " + item + " ";
        let eliminate = document.createElement("button");
        eliminate.textContent = "❌";
        eliminate.addEventListener("click",function(){
            array.splice(index,1);
            saveText();
            showText();
        });
        div.appendChild(eliminate);
        article.appendChild(div);
    });
};

function saveText(){
    localStorage.setItem("array",JSON.stringify(array));
};

function loadText(){
    let savedText = localStorage.getItem("array");
    if(savedText){
        array = JSON.parse(savedText);
    };
    showText();
};

loadText();

