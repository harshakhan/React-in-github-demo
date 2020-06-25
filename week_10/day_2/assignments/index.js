var user =[
    {
        username:'admin',
        password:'admin'
    },
    {
        username:'masai',
        password:'school'
    },
    {
        username:'albseb',
        password:'123'
    },
    {
        username:'nupul',
        password:'321'
    },
]


function isAuthentication(credentials){   // Its is just using it for email validation
    var flag = false;
   

    for(var i =0;i<user.length;i++){
        if( credentials.username === user[i].username && credentials.password === user[i].password){
            flag = true
            break

        }
            

    }
    return {success:flag,user:credentials.username}
}

function saveData(user){  // only to save the present user on localStorage
    var date = new Date
    var userInfo ={username: user, login_time: date.toUTCString()}
    localStorage.setItem('currentUser',JSON.stringify(userInfo))

    
}


function saveAllUserData(user){  // only to save the present user on localStorage
    var date = new Date
    var userInfo ={username: user, login_time: date.toUTCString()}

    var user= JSON.parse(localStorage.getItem('allusers')) || [] 
    user.push(userInfo)
    localStorage.setItem('allusers',JSON.stringify(user))  
}



function handleSubmit(){
    event.preventDefault()
    var input = event.target.querySelectorAll('input')

    var username = input[0].value;
    var password = input[1].value;

    var paylod = {username : username, password: password}


    var response = isAuthentication(paylod)
    // console.log(response)
    if(response.success){
        saveData(response.user)
        document.getElementById('error').textContent ="Sucess!"
        location.href="dash.html"

    }
    else{
        document.getElementById('error').textContent ="Wrong Crodential"

    }
    saveAllUserData(response.user)
}

window.onload = function(){
    var form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
}