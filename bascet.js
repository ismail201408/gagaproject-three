
let tbody = document.querySelector(".tbody");
let divTotal = document.getElementById("divv");
let totalValue = document.getElementById("value");
let subtotalValue = document.querySelector(".cart-total .item .value"); 
tbody.innerHTML = "";
let totalSum = 0;
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    if (key.startsWith("towar1")) {
        let item = localStorage.getItem(key);
        if (!item) continue;
        let obj = JSON.parse(item);
        if (!obj || !obj.price) continue;
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${obj.img}" alt="" width="50"></td>
            <td>${obj.name2}</td>
            <td>${obj.price}</td>
            <td><input class="inp1" type="number" value="${obj.quantity || 1}" data-key="${key}"></td>
            <td class="sub">${obj.subtotal || obj.price}</td>
            <td><button class="butt1" data-key="${key}" style="
            background-color:#DB4444 ;
    color: white;
    width: 80px;
    height: 20px;
    border-radius: 6px;
    padding-left: 5px; 
    border: none;
    text-decoration: none;">Удалить</button></td>
        `;
        tbody.appendChild(tr);
        totalSum += obj.subtotal || obj.price;
    }
}
updateTotalDisplays(totalSum);
document.querySelectorAll(".inp1").forEach(inp => {
    inp.addEventListener("input", function() {
        let key = this.dataset.key;
        let item = localStorage.getItem(key);
        if (!item) return;
        
        let obj = JSON.parse(item);
        if (!obj || !obj.price) return;
        
        let newQuantity = parseInt(this.value) || 0;
        let newSubtotal = obj.price * newQuantity;
        
        obj.quantity = newQuantity;
        obj.subtotal = newSubtotal;
        
        localStorage.setItem(key, JSON.stringify(obj));
        
        this.closest("tr").querySelector(".sub").innerText = newSubtotal;
        
        recalculateTotals();
    });
});

document.querySelectorAll(".butt1").forEach(btn => {
    btn.addEventListener("click", function() {
        let key = this.dataset.key;
        localStorage.removeItem(key);
        window.location.reload();
    });
});

function recalculateTotals() {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("towar1")) {
            let item = localStorage.getItem(key);
            if (!item) continue;
            let obj = JSON.parse(item);
            if (!obj || !obj.subtotal) continue;
            total += obj.subtotal;
        }
    }
    localStorage.setItem("totalSum", total);
    updateTotalDisplays(total);
}

function updateTotalDisplays(sum) {
    if (subtotalValue) {
        subtotalValue.innerText = sum;
    }
    if (totalValue) {
        totalValue.innerText = sum;
    }
}
function func3() {
    divTotal.style.display = "block";
}

function func4() {
    divTotal.style.display = "none";
}

function btnt() {
    window.location.href = "cart.html";
}

function func1() {
    window.location.href = "myaccaunt.html";
}
function func2() {
    window.location.href = "bascet.html";
}

let b = document.getElementById("username11");
let log1 = document.getElementsByClassName("logBtn")[0];
let craw = JSON.parse(localStorage.getItem(`loginuser`));

if (craw && craw.username) {
    b.innerHTML = craw.username;
    log1.innerHTML = "Log out"; 
} else {
    log1.innerHTML = "Log in";
    b.innerHTML = "username";
}

log1.addEventListener("click", () => {
    localStorage.removeItem(`loginuser`);
    window.location.href = "login.html";
});