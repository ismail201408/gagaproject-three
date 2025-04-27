let li = document.getElementsByClassName("p")[0]
let li1 = document.getElementsByClassName("p")[1]
let li2 = document.getElementsByClassName("p")[2]
let li3 = document.getElementsByClassName("p")[3]
let b = document.getElementById("username11");
let num = localStorage.getItem("num");
let craw = JSON.parse(localStorage.getItem(`loginuser`));
let craw1 = craw.username;
let craw2 = craw.name1;
let craw3 = craw.surname;
let craw4 = craw.email;
let craw5 = craw.username;
if (localStorage.getItem(`loginuser`)) {
    b.innerHTML = craw1;
    li.innerHTML = craw2;
    li1.innerHTML = craw3;
    li2.innerHTML = craw4;
    li3.innerHTML = craw5;
} else {
    b.innerHTML = "username";
}
let log1 = document.getElementById("logBtn");
log1.innerHTML = "log out";      
log1.addEventListener("click", () => {
    localStorage.removeItem(`loginuser`);
    window.location.href = "login.html";
});

function func2() {
    window.location.href = "bascet.html"
}
let my = document.getElementById("myproduct")
my.addEventListener("click", () => {
    window.location.href = "newproduct.html";
});