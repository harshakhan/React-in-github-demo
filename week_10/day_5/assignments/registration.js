window.addEventListener("DOMContentLoaded", function(){
    var form = document.querySelector('form')
    form.addEventListener("submit",handleSubmit)
})

function registerUser(payload){
    var xhr = new XMLHttpRequest()
    xhr.open("POST","http://localhost:8080/auth/register")
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8")
    xhr.send(JSON.stringify(payload))
    
    xhr.onload = function(){
       var response = JSON.parse(this.response)  // converting the response
       if(this.status ===200){
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
        console.log('error',this)
        
    }

}





function handleSubmit(){
    event.preventDefault()
    var form = new FormData(event.target)
    var payload ={};

    payload.name = form.get("name")
    payload.email = form.get("email")
    payload.password = form.get("password")
    payload.username = form.get("username")
    payload.mobile = form.get("mobile")
    payload.description = form.get("description")
    console.log(payload)

    registerUser(payload)  //passing the value to the registerUser fun()
     
}

function handleResponse(response){
    var div = document.getElementById('response')
    div.textContent = response.message


}