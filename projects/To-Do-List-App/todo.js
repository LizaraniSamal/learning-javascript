

function addTask(){
    const inputBox = document.getElementById("input-box");
    const ulList = document.getElementById("list-container");
    console.log("hello",inputBox);
    if(inputBox.value === ""){
        alert("you must write something!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ulList.appendChild(li);
        
    }
}