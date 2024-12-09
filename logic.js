let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("please Enter Task");
    }else{
        let newEle = document.createElement("ul","li");
        newEle.innerHTML=`${inputs.value}<i class ="fa-regular fa-trash-can"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
        newEle.remove();
        savedata();
        }
    }
}
listcontainer.addEventListener("click",function(e){
if(e.target.tagname === "li"){
    e.target.classlist.toggle("checked");
    savedata();
}
else if(e.target.tagname === "span"){
    e.target.parentelement.remove();
    savedata();
}
}, false);
    
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}