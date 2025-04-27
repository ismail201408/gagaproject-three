let btn = document.getElementsByTagName("button")[0];
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
});
let signup = {
        name1: "",
        surname: "",
        email: "",
        username: "",
        password: "",
    };
    if(!localStorage.getItem("num")){
        localStorage.setItem("num","0");
    }
    let a = +localStorage.getItem("num");
    
    
    btn.addEventListener("click",()=>{
        let name1 = document.getElementById("i1")
        let surname = document.getElementById("i2")
        let email = document.getElementById("i3")
        let username = document.getElementById("i4")
        let password = document.getElementById("i5")
        signup.name1 = name1.value;
        signup.surname = surname.value;
        signup.email = email.value;
        signup.username = username.value;
        signup.password = password.value;
        localStorage.setItem(`custom ${a++}`,JSON.stringify(signup));
        localStorage.setItem("num",a);
        window.location.href = "login.html"
    });
    //  let b = document.getElementById("username11")
    //  let num = +localStorage.getItem("num") 
    //  let c = localStorage.getItem(`custom ${num-1}`)
    //  let username = c.username;
    //  b.innerHTML = username;
    //  let log = document.getElementsByClassName("logBtn")[0]
    //  log.innerHTML= "log out"
    //  log.addEventListener("click",()=>{
        //      localStorage.removeItem(c)
        //  })
        //  let icon = document.getElementById("icon3")
        // function func1() {
            //     window.location.href = "myaccaunt.html"
            // }
            // let icon1 = document.getElementById("icon2")
            // function func2() {
                //     window.location.href = "bascet.html"
                // }
                
                
                //  localStorage.clear()
                // let b = document.getElementById("username11");
                // let num = localStorage.getItem("num");
                // let craw = JSON.parse(localStorage.getItem(`loginuser`));
                // let craw1 = craw.username;
                // let log1 = document.getElementsByClassName("logBtn")[0];
                // if (localStorage.getItem(`loginuser`)) {
                //     b.innerHTML = craw1;
                //     log1.innerHTML = "Log out";
                // } else {
                //     log1.innerHTML = "Log in";
                //     b.innerHTML = "username";
                // }
                // log1.addEventListener("click", () => {
                //     localStorage.removeItem(`loginuser`);
                //     window.location.href = "login.html";
                // });
                // function func2() {
                //     window.location.href = "bascet.html"
                // }
                // function func1() {
                //     window.location.href = "myaccaunt.html";
                // }