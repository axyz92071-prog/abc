const today = document.getElementById("today");
const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const priority = document.getElementById("priority");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const search = document.getElementById("search");
const progressBar = document.querySelector(".progress-bar");
const progressText = document.getElementById("progressText");
const themeBtn = document.getElementById("themeBtn");

today.innerText = new Date().toDateString();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ---------------- Render ----------------

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
        <div>
            <h3 style="${task.completed ? 'text-decoration:line-through;color:#ccc;' : ''}">
                ${task.title}
            </h3>

            <small>
                ⏰ ${task.time || "--:--"} |
                ⭐ ${task.priority}
            </small>
        </div>

        <div>

            <button class="completeBtn">
                ${task.completed ? "Undo" : "Done"}
            </button>

            <button class="deleteBtn">
                Delete
            </button>

        </div>
        `;

        li.querySelector(".completeBtn").onclick = () => {

            tasks[index].completed = !tasks[index].completed;

            saveTasks();

        };

        li.querySelector(".deleteBtn").onclick = () => {

            tasks.splice(index,1);

            saveTasks();

        };

        taskList.appendChild(li);

    });

    updateProgress();

}

// ---------------- Add Task ----------------

addTaskBtn.onclick = () => {

    if(taskInput.value.trim()===""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        title: taskInput.value,

        time: taskTime.value,

        priority: priority.value,

        completed:false

    });

    taskInput.value="";
    taskTime.value="";
    priority.selectedIndex=0;

    saveTasks();

};

// ---------------- Save ----------------

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

    renderTasks();

}

// ---------------- Progress ----------------

function updateProgress(){

    if(tasks.length===0){

        progressBar.style.width="0%";

        progressText.innerText="0% Completed";

        return;

    }

    const completed=tasks.filter(t=>t.completed).length;

    const percent=Math.round((completed/tasks.length)*100);

    progressBar.style.width=percent+"%";

    progressText.innerText=
        `${completed}/${tasks.length} Tasks Completed (${percent}%)`;

}

// ---------------- Search ----------------

search.addEventListener("keyup",()=>{

    const value=search.value.toLowerCase();

    document.querySelectorAll(".task").forEach(task=>{

        task.style.display=
            task.innerText.toLowerCase().includes(value)
            ? "flex"
            : "none";

    });

});

// ---------------- Theme ----------------

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}

themeBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

};

// ---------------- Start ----------------

renderTasks();
