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
        num4.innerHTML =  obj.raiting;
    }}
img.src = obj.img;
num1.innerHTML = obj.name2;
num2.innerHTML = obj.price + "$";
let bascetBtn = document.getElementById("button");
let customObj = {
    img: "",
    name2: "",
    price: "",
    raiting: "",
    sub: "",
}
for(let i = 0; i<=bascetBtn.length; i++){
   if(bascetBtn[i]) {
    bascetBtn[i].addEventListener("click", () =>{
        let img = document.getElementsByClassName("img1")[i];
        let nameofCustom = document.getElementsByClassName("h11")[i];
        let price = document.getElementsByClassName("p1")[i];
        customObj.img = img.src;
        customObj.name2 = nameofCustom.innerHTML;
        customObj.price = price.innerHTML;
        localStorage.setItem(`towar1 ${i}`,JSON.stringify(customObj))
    
    })
} 
}