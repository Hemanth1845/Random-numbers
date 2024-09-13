const radomnumber = document.getElementById("random");
const label = document.getElementById("mylabel");
let count;
let max = 100;
let min = 1;
radomnumber.onclick = function(){
     count = Math.floor(Math.random()*max)+min;
     label.textContent = count;
}