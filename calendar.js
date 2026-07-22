const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

let currentDate = new Date();

function renderCalendar(){

calendarDays.innerHTML="";

const year=currentDate.getFullYear();
const month=currentDate.getMonth();

const firstDay=new Date(year,month,1).getDay();
const lastDate=new Date(year,month+1,0).getDate();

monthYear.innerHTML=currentDate.toLocaleString("default",{
month:"long",
year:"numeric"
});

for(let i=0;i<firstDay;i++){

const empty=document.createElement("div");

calendarDays.appendChild(empty);

}

for(let day=1;day<=lastDate;day++){

const div=document.createElement("div");

div.className="day";

div.innerHTML=day;

const today=new Date();

if(
day===today.getDate() &&
month===today.getMonth() &&
year===today.getFullYear()
){

div.classList.add("today");

}

calendarDays.appendChild(div);

}

}

renderCalendar();

document.getElementById("prevMonth").onclick=()=>{

currentDate.setMonth(currentDate.getMonth()-1);

renderCalendar();

};

document.getElementById("nextMonth").onclick=()=>{

currentDate.setMonth(currentDate.getMonth()+1);

renderCalendar();

};
