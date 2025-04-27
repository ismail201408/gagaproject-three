let b = document.getElementById("username11");
let num = localStorage.getItem("num");
let craw = JSON.parse(localStorage.getItem(`loginuser`));
let craw1 = craw.username;
let log1 = document.getElementsByClassName("logBtn")[0];
if (localStorage.getItem(`loginuser`)) {
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
function func2() {
    window.location.href = "bascet.html"
}
function func1() {
    window.location.href = "myaccaunt.html";
}

