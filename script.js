const taskList = document.getElementById("taskList");

document.getElementById("date").innerHTML =
new Date().toDateString();

loadTasks();

function addTask(){

let task = document.getElementById("taskInput").value;
let time = document.getElementById("alarmTime").value;

if(task==""){
alert("Enter a task");
return;
}

let li = document.createElement("li");

li.innerHTML=`
<span onclick="this.classList.toggle('completed')">
${task}<br><small>⏰ ${time}</small>
</span>

<button onclick="removeTask(this)">❌</button>
`;

taskList.appendChild(li);

saveTasks();

setAlarm(task,time);

document.getElementById("taskInput").value="";
document.getElementById("alarmTime").value="";
}

function removeTask(btn){
btn.parentElement.remove();
saveTasks();
}

function saveTasks(){
localStorage.setItem("tasks",taskList.innerHTML);
}

function loadTasks(){
taskList.innerHTML=localStorage.getItem("tasks") || "";
}

function toggleDark(){
document.body.classList.toggle("dark");
}

function setAlarm(task,time){

if(time=="") return;

let now=new Date();

let alarm=new Date();

let t=time.split(":");

alarm.setHours(t[0]);
alarm.setMinutes(t[1]);
alarm.setSeconds(0);

let diff=alarm-now;

if(diff>0){
setTimeout(()=>{
alert("⏰ Reminder: "+task);
},diff);
}
}
