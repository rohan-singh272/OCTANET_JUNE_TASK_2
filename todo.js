let inputs = document.getElementById("inp");
let text = document.querySelector("#text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }else{
        let newEL = document.createElement("ul");
        newEL.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;  
        text.appendChild(newEL);   
        inputs.value = "";
        newEL.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEL.remove()  
        }
    }
}