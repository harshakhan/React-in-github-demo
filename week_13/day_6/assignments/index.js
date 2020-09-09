const users =[
    {userName:"abc",password:'123'},
    {userName:"abcd",password:'1234'},
    {userName:"abcde",password:'12345'},
    {userName:"harsha",password:'12'},
    {userName:"admin",password:'admin'},
]
window.onload = function(){
    var form = document.querySelector("form")
    form.addEventListener("submit",handleSubmit)
}

function handleSubmit(){
    event.preventDefault()
   var userName = document.querySelector("#username").value
   var password = document.querySelector("#password").value
   let date = new Date()
   date= date.toLocaleDateString()
//    console.log(userName, password)

    var payload={}
    payload.userName = userName
    payload.password = password
    payload.date = date
    addAllData(payload)
    // console.log(payload)

    let flag = false
    let admin = false
    for(var i =0;i<users.length;i++){
        if(payload.userName ===users[i].userName && payload.password ===users[i].password){
            flag=true
        }
    }
    if(userName ==="admin" && password ==="admin" ){
        admin= true
    }
    if(flag){
       location.href="dash.html"
       localStorage.setItem("userInfo",JSON.stringify(payload))
    }
    if(admin){
       location.href ="admin.html"
    }
}

 function addAllData(payload){
    const allUserData = JSON.parse(localStorage.getItem("data")) || []
     allUserData.push(payload)
     localStorage.setItem("data",JSON.stringify(allUserData))
    //  console.log(allUserData)

 }
