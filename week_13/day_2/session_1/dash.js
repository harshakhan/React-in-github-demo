window.addEventListener("load", diaplay)

var logout = document.getElementById("button")
logout.addEventListener("click", handleLogoutForm)

function diaplay() {
  
    var token = document.getElementById("token")
    var item = JSON.parse(localStorage.getItem("user"))
    console.log(item)
   
    token.textContent = "token : " + item.token
}

function handleLogoutForm() {
    window.location.replace("registration.html")
    localStorage.removeItem("user")
}