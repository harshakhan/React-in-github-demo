window.onload = function(){
    loadData()
    var btn = document.getElementById('logout')
    btn.addEventListener('click',function(){
        logout('successfully logged out')
    })

}
function logout(message){
    alert(message)
    localStorage.removeItem('currentUser')   // while loging out removeing the currentItem
    location.href = "index.html"
   

}

function loadData(){
    var user = JSON.parse(localStorage.getItem("currentUser")) 
    if(!user){                         // if the localssstorage is empty then show alert msg and redirect it into the login pasge

       logout("Session Expired")
        return
    }

    // pasiing the input to the position
    var header = document.querySelector('h1')
    header.textContent = user.username
    var time = document.querySelector('p')
    time.textContent = user.login_time
}