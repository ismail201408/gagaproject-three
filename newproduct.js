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
function btn11() {
    window.location.href = "new.html";
    localStorage.removeItem("editKey")
}
let id = 1;
let tbody = document.getElementsByClassName("tbody")[0];
for (let i = 0; i < localStorage.length; i++) {
    if (!localStorage.key(i).search("towar2")) {
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        let tr = document.createElement("tr");

        tr.innerHTML = `
           <td>${id++}</td>
           <td>${obj.name2}</td>
            <td>${obj.model }</td>
            <td>${obj.cat}</td>
            <td ><img src="${obj.img}" alt=""></td>
            <td>${obj.price}</td>
            <td>${obj.rat}</td>
            <td>
            <button class="butt" onclick="editProduct('${localStorage.key(i)}')">Редактировать</button>
            <button class="butt1" onclick="delete1(${i})">Удалить</button>
            </td> 
        `;
        let sub = document.getElementsByClassName("butt");
        let inp1 = document.getElementsByClassName("butt1");

        function func2(index) {
            sub[index].innerHTML = inp1[index].value *
                JSON.parse(localStorage.getItem(localStorage.key(index))).price ;
        }

        tbody.append(tr);
        function delete1(index) {
            localStorage.removeItem(localStorage.key(index));
            window.location.reload();
       };
       function editProduct(key) {
        localStorage.setItem('editKey', key); // Сохраняем ключ товара
        window.location.href = 'new.html'; // Переход на страницу редактирования
    }
    } 
} 