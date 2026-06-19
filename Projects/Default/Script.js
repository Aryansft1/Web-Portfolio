function toggleMode(){
    document.body.classList.toggle("dark");
}

function updateClock(){
    let now = new Date();
    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function addTask(){
    let task = document.getElementById("task").value;
    if(task === "") return;

    let li = document.createElement("li");
    li.innerText = "• " + task;

    document.getElementById("list").appendChild(li);
    document.getElementById("task").value = "";
}
