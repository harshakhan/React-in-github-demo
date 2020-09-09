window.onload = function () {
    // var btn = document.getElementById("btn")
    // btn.addEventListener("click", getUserList)

    var form = document.querySelector("form")
    form.addEventListener("submit", handleSubmit)

}

function handleSubmit() {

    event.preventDefault()
    var elems = event.target.querySelectorAll('input')

    var username = elems[0].value
    var password = elems[1].value

    var payload = {
        
        password: password,
        username: username,
    }
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/auth/login')
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.send(JSON.stringify(payload))
    xhr.onload = function () {
        console.log(this.response)
        if (this.status === 200) {
            handleSuccess(JSON.parse(this.response))
        }
        else {
            alert("error")
            handleError(JSON.parse(this.response))
        }
    }
    xhr.onerror=function(){
        alert("onerror")
    }
}

function handleSuccess(response){

    var token=response.token  
      console.log(token)

      if(response.error==false){
          alert("Login successfull")
          

      }

    // var res = document.getElementById("res")
    // res.innerHTML = token

    handleProfile(token)
}

function handleError(response){
    var error=response.error  
    //   console.log(error);
      

    var res = document.getElementById("res")
    res.innerHTML = error;
    

}

function handleProfile(token) {
    var usname = document.getElementById("username");
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/user/" + usname.value;
    xhr.open("GET", url);
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        var data=JSON.parse(xhr.response);
        renderDOM(data)
      }
    };
}

function renderDOM(arr) {
    console.log(arr)

    var res = document.getElementById("res")
    res.innerHTML = ""


    var div = document.createElement('div')

    var ul = document.createElement('ul')
    

        var li = document.createElement('li')
        li.textContent = "username " + arr.username + ",  name: " + arr.name
        ul.append(li)

    
    div.append(ul)
    res.append(div)

}