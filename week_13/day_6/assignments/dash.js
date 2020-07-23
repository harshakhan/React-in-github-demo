const userInfo=JSON.parse(localStorage.getItem("userInfo"))
// console.log(userInfo)

let res = document.querySelector(".res")
let h1 = document.createElement("h1")
let p = document.createElement("p")
let div = document.createElement("div")
let btn = document.createElement("button")
h1.textContent = "usetname :" + userInfo.userName
p.textContent = "date :"+ userInfo.date
btn.innerHTML="LOGOUT"
div.append(h1,p,btn)
res.append(div)


btn.addEventListener('click',userLogout)
function userLogout(){
    localStorage.removeItem("userInfo")
    location.href ="index.html"
}