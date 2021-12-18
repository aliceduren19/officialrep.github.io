const an= document.querySelector('#christmas');

const friday= new Date();
let dayOfMonth;
dayOfMonth=friday.getMonth();
if (dayOfMonth == 11) {
   an.classList.toggle("christs");
}
else{
    an.classList.remove("christs");
    an.style.display="none";
}
//Wednesday, 24 July 2020
const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let dayObj= new Date()
let weekday=dayNames[dayObj.getDay()];
document.getElementById('day').textContent=weekday;

let dayn=new Date()
let daynum=dayn.getDate()
document.getElementById("daynum").textContent=daynum

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let m=new Date()
let n=monthNames[m.getMonth()];
document.getElementById("month").textContent=n

let x=new Date()
let y=x.getFullYear()
document.getElementById("year").textContent=y
