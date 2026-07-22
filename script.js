const today = document.getElementById("today");

today.innerHTML =
new Date().toDateString();

document.getElementById("themeBtn").onclick=()=>{

document.body.classList.toggle("dark");

}
