
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
let bascetBtn = document.getElementById("addToCartBtn");
// let customObj = {
//     img: "",
//     name2: "",
//     price: "",
//     raiting: "",
//     sub: "",
// }
   if(bascetBtn) {
    bascetBtn.addEventListener("click", () =>{
        let img = document.getElementsByClassName("img1");
        let nameofCustom = document.getElementsByClassName("h11");
        let price = document.getElementsByClassName("p1");
        customObj.img = img.src;
        customObj.name2 = nameofCustom.innerHTML;
        customObj.price = price.innerHTML;
        localStorage.setItem(`towar1 `,JSON.stringify(customObj))
    
    })
    // let customObj1 = {
    //     img: "",
    //     name2: "",
    //     price: "",
    //     raiting: "",
    //     sub: "",
    // }
    let buttons = document.getElementById("addToCartBtn"); // или querySelectorAll(".button")
    
    for (let b = 0; b < buttons.length; b++) {
        buttons[b].addEventListener("click", () => {
            let img = document.getElementsByClassName("img1")[b];
            let nameofCustom = document.getElementsByClassName("h11")[b];
            let price = document.getElementsByClassName("p1")[b];
            customObj1.img = img.src;
            customObj1.name2 = nameofCustom.innerHTML;
            customObj1.price = price.innerHTML;
            localStorage.setItem(`towar111 ${b}`, JSON.stringify(customObj1));
        });
    }
} 
// let title = document.getElementsByClassName("title")[0]
let b = document.getElementById("username11");
let num = localStorage.getItem("num");
let craw = JSON.parse(localStorage.getItem(`loginuser`));
let craw1 = craw.username;
let log1 = document.getElementById("logBtn");
if (localStorage.getItem(`loginuser`)) {
    // title.innerHTML = "Your accaunt" + craw1
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

// 
// let bascetBtn = document.getElementById("addToCartBtn");
// let numofElement = +localStorage.getItem("clickedElement");
// let obj = JSON.parse(localStorage.getItem(`tovvar ${numofElement}`));

if (bascetBtn) {
    bascetBtn.addEventListener("click", () => {
        let basketItems = [];
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).startsWith("towar1_")) {
                let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
                basketItems.push(item);
            }
        }
        // Генерация уникального ключа
        let index = basketItems.length + 1;

        let itemToStore = {
            img: obj.img,
            name2: obj.name2,
            price: parseFloat(obj.price),
            quantity: 1,
            subtotal: parseFloat(obj.price)

        };
        localStorage.setItem(`towar1_${index}`, JSON.stringify(itemToStore));

        alert("Товар добавлен в корзину!");
    });
}
// localStorage.clear()