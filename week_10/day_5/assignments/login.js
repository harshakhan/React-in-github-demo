window.addEventListener("DOMContentLoaded", function(){
    var form = document.querySelector('form')
    form.addEventListener("submit",handleSubmit)
})

function loginUser(payload){
    var xhr = new XMLHttpRequest()
    xhr.open("POST","http://localhost:8080/auth/login")
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.send(JSON.stringify(payload))
    
    xhr.onload = function(){
       var response = JSON.parse(this.response)  // converting the response
       console.log(this.status)
       if(this.status === 200){
           console.log(this.response)
           if(response.error){
               console.log('error')
               handleResponse(response)
           }
           else{
               handleResponse(response)
           }
       }
    }
    xhr.onerror = function(){
        console.log(this.status)
       handleError()
        
    }

}

function getProfileDetails(user,token){
    var xhr = new XMLHttpRequest()
    xhr.open("GET","http://localhost:8080/user/"+user)
    xhr.setRequestHeader("Authorization", "Bearer" +token)
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.send()
    
    xhr.onload = function(){
       var response = JSON.parse(this.response)  // converting the response
       console.log(this.status)
       if(this.status === 200){
           console.log(this.response)
           if(response.error){
               console.log('error')
               handleError("Invalid token for the user")
           }
           else{
               handleProfileDetails(response)
               getProfileDetails(payload.username,response.token)
           }
       }
    }
    xhr.onerror = function(){
        console.log(this.status)
        handleError("The username or password was incorrect")
        
    }


}

function handleError(message){
    var div = document.getElementById('response')
    div.textContent = message

}

function handleResponse(response){
    var div = document.getElementById('response')
    div.textContent = response.token


}


function handleProfileDetails(response){
    var div = document.getElementById('profile')
    div.textContent = response.name +"\n" +response.email + "\n" +response.username + "\n" + response.description


}





function handleSubmit(){
    event.preventDefault()
    var form = new FormData(event.target)
    
    var payload ={};
    payload.password = form.get("password")
    payload.username = form.get("username")

    console.log(payload)
    loginUser(payload)  //passing the value to the loginUser fun()
     
}

