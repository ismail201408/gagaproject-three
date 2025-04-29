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
let sub = document.getElementById("sub")
let tot = document.getElementById("tot")
if(sub&&tot){
    tot.innerHTML = localStorage.getItem("totalSum")
   let a = sub.innerHTML = localStorage.getItem("totalSum")
//    let a1 = localStorage.getItem("towar2")
    function qqq() {
        window.location.href = "index2.html";





        for(let i = 0; i<=localStorage.length; i++){
            if(localStorage.getItem(`towar1 ${i}`)) {
                 localStorage.removeItem(`towar1 ${i}`);
             
             }
         } 
         alert(`Наконец вы абонкротились С вашево счета снялось ${a}`);    
         }
    
        }