window.onload=function(){
    var form=document.querySelector('form')
    form.addEventListener('submit',handleForm)
}

function handleForm(){
    event.preventDefault()

    var elems=event.target.querySelectorAll('input')

    var name=elems[0].value
    var email=elems[1].value
    var password=elems[2].value
    var username=elems[3].value
    var mobile=elems[4].value
    var description=elems[5].value

    var payload={
     name:name,
     email:email,
     password:password,
     username:username,
     mobile:mobile,
     description:description,
    }

    console.log(name,email,password,username,mobile,description)

    var xhr=new XMLHttpRequest()

    xhr.open('POST', 'http://localhost:8080/auth/register')
    xhr.setRequestHeader('Content-Type','application/json; charset=utf-8')
    xhr.send(JSON.stringify(payload))

    xhr.onload=function(){
        console.log(this.response)
    }


    //     if(this.status===200){
    //         handleSuccess(JSON.parse(this.response))
    //     }
    //     else{
    //         handleError(JSON.parse(this.response))
    //     }
    // }


   

   
}


function handleSuccess(response){

    var token=response.token  //token is a keyword here in the xhr objct response
      console.log(token)

    var res = document.getElementById("res")
    res.innerHTML = token

  
}