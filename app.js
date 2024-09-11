const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
var enter = document.getElementById("inputBox");
var save = document.getElementById("save")

function addTask(){
    if (inputBox.value.trim() === ''){
        alert("Please enter a task");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        save.classList.add("show-save");
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
enter.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && inputBox.value !== ''){
        event.preventDefault();
        document.getElementById("addTaskBtn").click();
    }
});