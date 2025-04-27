document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
});
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
let icon = document.getElementById("icon3")
function func1() {
    window.location.href = "myaccaunt.html"
}
let icon1 = document.getElementById("icon2")
function func2() {
    window.location.href = "bascet.html"
}
               let tbody = document.getElementsByClassName("parent1")[0];
                for (let i = 0; i < localStorage.length; i++) {
                    if (!localStorage.key(i).search("towar2")) {
                        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
                        let tr = document.createElement("div");
                        tr.innerHTML = `
                        <div class="product">
                        <img src="${obj.img}" alt="" class="img1">
                        <h1 class="h11">${obj.name2}</h1>
                        <p class="p1">${obj.price}</p>
                        <p class="p2">⭐${obj.rat}</p>
                        <button class="button">Add to Basket</button>
                        </td> 
                        </div>
                        `;
                        tr.style = `.parent1{
                            display: flex;
                            width: 90vw;
                            padding: 20px;
                            flex-wrap: wrap;
                            margin-left: 140px;
                            margin-top: -45px;
                            }
                            .product button{
                                background-color: blue;
                                color: white;
                                padding: 10px;
                                border-radius: 5px;
                                border: none;
                                margin-top: 10px;
                                transition: 0.4s;
                                cursor: pointer;
                                }
                                .product button:active {
                                    transform: scale(0.90); /* Уменьшение кнопки при нажатии */
                                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                                    }
                                    .product button:hover{
                                        background-color: rgb(99, 99, 108);
                                        color: white;
                                        padding: 10px;
                                        border-radius: 5px;
                                        border: none;
                                        margin-top: 10px;
                                        transition: 0.4s;
                                        }
                                        
                                        .product img{
                                            height: 120px;
                                            transition: 0.4s;
                                            /* padding-left: 25px ; */
                                            }
                                            .product img:hover{
                                                transform: scale(1.05);
                                                transition: 0.4s;
                                                }`   
                                                tbody.append(tr); } 
                                                let bascetBtn = document.getElementsByClassName("button");
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
                                                let images = document.getElementsByTagName("img")
                                                
                                                for(let k = 0; k<images.length; k++){
                                                    images[k].addEventListener("click",()=>{
                                                        localStorage.setItem("clickedElement", k)
                                                        window.location.href = "detailsOfProducts.html"
                                                    })
                                                }
                                                
                                                let tovar = {
                                                    img: "",
                                                    name12: "",
                                                    price: "",
                                                    dicription: "",
                                                    total: "",
                                                    raiting: ""
                                                };
                                                
                                                for (let i = 0; i < bascetBtn.length; i++) {
                                                    if (bascetBtn[i]) {
                                                      let img = document.getElementsByClassName("img1")[i];
                                                      let nameOfCustom = document.getElementsByClassName("h11")[i];
                                                      let price = document.getElementsByClassName("p1")[i];
                                                      let rat = document.getElementsByClassName("p2")[i];
                                                      customObj.img = img.src;
                                                      customObj.name2 = nameOfCustom.innerHTML;
                                                      customObj.price = price.innerHTML;
                                                      customObj.raiting = rat.innerHTML ;
                                                      localStorage.setItem(`tovvar ${i}`, JSON.stringify(customObj));
                                                    }
                                                  }
    } 