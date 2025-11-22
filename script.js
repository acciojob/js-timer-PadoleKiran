// write js code here if required
function upDateTimmer(params) {
let timer = document.getElementById("timer");

let now = new Date();

let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
let seconds = now.getSeconds().toString().padStart(2, "0");

let formatted = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

document.getElementById("timer").textContent = formatted;
}

setInterval(upDateTimmer, 1000);
upDateTimmer();
