let title = document.getElementsByClassName("title")[0]
let b = document.getElementById("username11");
let num = localStorage.getItem("num");
let craw = JSON.parse(localStorage.getItem(`loginuser`));
let craw1 = craw.username;
let log1 = document.getElementById("logBtn");
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
function updatePreview() {
    const url = document.getElementById('imageUrl').value;
    document.getElementById('preview').src = url;
  }

  function resetPreview() {
    document.getElementById('preview').src = '';
  }

        document.addEventListener("DOMContentLoaded", () => {
            const bascetBtn = document.getElementsByClassName("editBtn")[0];
            bascetBtn.addEventListener("click", btnnn);
          });
          
          function btnnn(event) {
            event.preventDefault();
            let img = document.getElementById("imageUrl").value;
            let nameofCustom = document.getElementById("h11").value;
            let price = document.getElementById("p1").value;
            let cat = document.getElementById("cat").value;
            let model = document.getElementById("mod").value;
            let des = document.getElementById("des").value;
            let rat = document.getElementById("rat").value;
          
            let customObj2 = {
              img: img,
              name2: nameofCustom,
              cat: cat,
              des: des,
              rat: rat,
              model: model,
              price: price,
            };
          
            let a = +localStorage.getItem("num1");
            let editproduct = localStorage.getItem("editKey")
            if(localStorage.getItem("editKey")){
                localStorage.setItem(`${editproduct}`, JSON.stringify(customObj2));
            }else{
                localStorage.setItem(`towar2 ${a++}`, JSON.stringify(customObj2));
            }
            localStorage.setItem("num1", a);
          
            window.location.href = "newproduct.html";
        }
        if(localStorage.getItem("editKey")){
            const key = localStorage.getItem('editKey');
            const data = JSON.parse(localStorage.getItem(key));
            document.getElementById('h11').value = data.name2;
            document.getElementById('mod').value = data.model;
            document.getElementById('cat').value = data.cat;
            document.getElementById('imageUrl').value = data.img;
            document.getElementById('p1').value = data.price;
            document.getElementById('rat').value = data.rat;
            
            document.getElementById('editForm').addEventListener('submit', function(e) {
                e.preventDefault();
            });
            
                const updatedProduct = {
                    name2: document.getElementById('name2').value,
                    model: document.getElementById('model').value,
                    cat: document.getElementById('cat').value,
                    img: document.getElementById('imageUrl').value,
                    price: document.getElementById('price').value,
                    rat: document.getElementById('rat').value,
                };
            
                localStorage.setItem(key, JSON.stringify(updatedProduct));
                localStorage.removeItem("editKey");
                window.location.href = 'newproduct.html'; 
        }
