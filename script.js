*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins,sans-serif;
}

body{

background:linear-gradient(135deg,#4facfe,#00f2fe);

min-height:100vh;

display:flex;

justify-content:center;

align-items:center;

padding:30px;

}

.container{

width:100%;

max-width:850px;

background:rgba(255,255,255,.15);

backdrop-filter:blur(15px);

border-radius:20px;

padding:30px;

box-shadow:0 10px 30px rgba(0,0,0,.2);

color:white;

}

header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:20px;

}

header h1{

font-size:34px;

}

#themeBtn{

border:none;

background:white;

color:#333;

padding:12px;

border-radius:50%;

cursor:pointer;

font-size:20px;

}

#today{

margin-bottom:20px;

font-size:18px;

}

.task-box{

display:grid;

grid-template-columns:2fr 1fr 1fr auto;

gap:10px;

margin-bottom:20px;

}

.task-box input,
.task-box select{

padding:12px;

border:none;

border-radius:10px;

outline:none;

}

.task-box button{

background:#1abc9c;

color:white;

border:none;

padding:12px 20px;

border-radius:10px;

cursor:pointer;

}

.task-box button:hover{

background:#16a085;

}

#search{

width:100%;

padding:12px;

border:none;

border-radius:10px;

margin-bottom:20px;

outline:none;

}

.progress{

height:18px;

background:rgba(255,255,255,.2);

border-radius:20px;

overflow:hidden;

margin-bottom:10px;

}

.progress-bar{

height:100%;

width:0%;

background:#2ecc71;

transition:.5s;

}

#progressText{

margin-bottom:25px;

}

#taskList{

list-style:none;

}

.task{

background:rgba(255,255,255,.2);

padding:15px;

border-radius:12px;

margin-bottom:10px;

display:flex;

justify-content:space-between;

align-items:center;

}

.calendar{

margin-top:40px;

}

.calendar h2{

margin-bottom:15px;

}

.calendar-box{

background:rgba(255,255,255,.2);

padding:50px;

border-radius:15px;

text-align:center;

font-size:22px;

}

@media(max-width:700px){

.task-box{

grid-template-columns:1fr;

}

header h1{

font-size:28px;

}

}
