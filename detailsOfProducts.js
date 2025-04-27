let title = document.getElementsByClassName("title")[0]
let b = document.getElementById("username11");
let num = localStorage.getItem("num");
let craw = JSON.parse(localStorage.getItem(`loginuser`));
let craw1 = craw.username;
let log1 = document.getElementById("logBtn");
if (localStorage.getItem(`loginuser`)) {
    title.innerHTML = "Your accaunt" + craw1
    b.innerHTML = craw1;
    log1.innerHTML = "Log out";
} else {
    log1.innerHTML = "Log in";
    b.innerHTML = "username";
}
log1.addEventListener("click", () => {
    localStorage.removeItem(`loginuser`);
    window.location.href = "login.html";
});
let log = document.getElementById("logBtn");
log.innerHTML = "log out";
log.addEventListener("click", () => {
    localStorage.removeItem(`loginuser`);
    window.location.href = "login.html";
});
function func2() {
    window.location.href = "bascet.html"
}
function func1() {
    window.location.href = "myaccaunt.html";
}

let img = document.getElementsByTagName("img")[0];
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");

let numofElement = +localStorage.getItem("clickedElement");
let obj = JSON.parse(localStorage.getItem(`tovvar ${numofElement}`));
for (let i = 0; i < localStorage.length; i++) {
    if (!localStorage.key(i).search("towar2")) {
        let obj1 = JSON.parse(localStorage.getItem(localStorage.key(i)));
        num4.innerHTML = "⭐"+ obj1.rat;
    }}
img.src = obj.img;
num1.innerHTML = obj.name2;
num2.innerHTML = obj.price + "$";