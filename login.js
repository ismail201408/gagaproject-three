let num = +localStorage.getItem("num");
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
});
let a = document.getElementsByClassName("consub")[0]
    a.addEventListener("click",()=>{
        for(let i = 0; i<=num; i++){
            let obj = JSON.parse(localStorage.getItem(`custom ${i}`));
            let inp1 = document.getElementById("i1");
            let inp2 = document.getElementById("i2");
            if (inp1.value == obj.username && inp2.value == obj.password){
                alert("Успешно");
                window.location.href = "index2.html";
                if(inp1.value == obj.username){
                    localStorage.setItem("loginuser",JSON.stringify(obj))
                }
                break;
            }else if ((inp1.value != obj.username || inp2.value != obj.password) && i == num-1) {
                alert("неверный пароль или username");
            }
            else{
                continue;
            }
        }
 });
//  localStorage.clear()

