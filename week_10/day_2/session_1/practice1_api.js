// window.onload = function(){
//     getUserlist()

// }


// function getUserlist(){
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET','https://reqres.in/api/users?page=2')

//     xhr.send()
//     xhr.onload = function(){
//         // console.log(this.response,typeof this.response)
//         var response = JSON.parse(this.response)     // interacting with sersver by replacing the XML with JSON (its converting its into objects)
//         console.log(response)   // it will directly print the data inside the data.
//         handleResponse(response)

//     }
// }


// function handleResponse(data){    // varible name is there and we are passing data.data
//     renderDOM(data.data)

// }


// function renderDOM(arr){   //arr is here is a key
//     document.body.innerHTML =""
//     var div = document.createElement('div');
//     var ul = document.createElement('ul');

//     for(var i=0;i<arr.length;i++){
//         var li = document.createElement('li')
//         li.textContent = "email: " +arr[i].email + ",Name" + arr[i].first_name;
//         ul.append(li)
//     }
//     div.append(ul)
//     document.body.append(div)



// }

//----------------------------------------------------------------------------------------------


window.onload = function(){
    var getData = document.getElementById('get')
    getData.addEventListener('click',getUserlist)

    var form = document.querySelector('form')
    form.addEventListener("submit",loginUser)


  
    

}


function loginUser(){
    event.preventDefault()

    var elems = event.target.querySelectorAll('input')
    
    var username = elems[0].value                     // we are just hardcoding the value
    var password = elems[1].value


    var payload = {
        username: username,
        password:password
    }

    console.log(username,password)   // it will print the output to console

    var xhr = new XMLHttpRequest();
    xhr.open('POST','https://reqres.in/api/login')

    xhr.onload = function(){
        console.log(this.response)
    }

    xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')  // declaring what type of XMLHttp is

    xhr.send(JSON.stringify(payload))    //we just cant push the ocject data directly into payload so we need to do stringfy( we will get error before so to remove error we need to specify what kind of data it is)


}


function getUserlist(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET','https://reqres.in/api/users?page=2')

    xhr.send()
    xhr.onload = function(){
        // console.log(this.response,typeof this.response)
        var response = JSON.parse(this.response)     // interacting with sersver by replacing the XML with JSON (its converting its into objects)
        
        // console.log(data.data)
        handleResponse(response)


    }
}


function handleResponse(data){    // varible name is there and we are passing data.data
    renderDOM(data.data)

}


function renderDOM(arr){
   
    var res = document.getElementById('res')
    res.innerHTML=""
    var div = document.createElement('div');
    var ul = document.createElement('ul');

    for(var i=0;i<arr.length;i++){
        var li = document.createElement('li')
        li.textContent = "email: " +arr[i].email + ",Name" + arr[i].first_name;
        ul.append(li)
    }
    div.append(ul)
    res.append(div)



}


// // we will get username and password after completion of the code and with token code all will be shown in the console

//------------------------------------------------------------------------
// window.onload = function(){
//     var getData = document.getElementById('get')
//     getData.addEventListener('click',getUserlist)

//     var form = document.querySelector('form')
//     form.addEventListener("submit",loginUser)


  
    

// }


// function loginUser(){
//     event.preventDefault()

//     var elems = event.target.querySelectorAll('input')
    
//     var username = elems[0].value                     // we are just hardcoding the value
//     var password = elems[1].value


//     var payload = {
//         username: username,
//         password:password
//     }

//     console.log(username,password)   // it will print the output to console

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST','https://reqres.in/api/login')

//     xhr.onload = function(){
//         console.log(this.response)
//         if(this.status === 200){                             // we are doing to handle the error which will come if we don't give password properly

//             handleSuccessLogin(JSON.parse(this.response))
//         }
//         else{
//             alert('error')
//             // handleError(this.response)
//         }
//     }

//     xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')  // declaring what type of XMLHttp is

//     xhr.send(JSON.stringify(payload))    //we just cant push the ocject data directly into payload so we need to do stringfy( we will get error before so to remove error we need to specify what kind of data it is)


// }

// function handleSuccessLogin(response){
//     var token = response.token
//     var res = document.getElementById('res') // doing the dom part
//     res.innerHTML= token
// }






// function getUserlist(){
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET','https://reqres.in/api/users?page=2')

//     xhr.send()
//     xhr.onload = function(){
//         // console.log(this.response,typeof this.response)
//         var response = JSON.parse(this.response)     // interacting with sersver by replacing the XML with JSON (its converting its into objects)
        
//         // console.log(data.data)
//         handleResponse(response)


//     }
// }


// function handleResponse(data){    // varible name is there and we are passing data.data
//     renderDOM(data.data)


// }


// function renderDOM(arr){
   
//     var res = document.getElementById('res')
//     res.innerHTML=""
//     var div = document.createElement('div');
//     var ul = document.createElement('ul');

//     for(var i=0;i<arr.length;i++){
//         var li = document.createElement('li')
//         li.textContent = "email: " +arr[i].email + ",Name" + arr[i].first_name;
//         ul.append(li)
//     }
//     div.append(ul)
//     res.append(div)



// }


// it will mainly show how to handle the error with the help of token if it is 200 it will print the token else it will throgh error alert box


//--------------------------------------------------------------------


// window.onload = function(){
//     var getData = document.getElementById('get')
//     getData.addEventListener('click',getUserlist)

//     var form = document.querySelector('form')
//     form.addEventListener("submit",loginUser)


  
    

// }


// function loginUser(){
//     event.preventDefault()

//     var elems = event.target.querySelectorAll('input')
    
//     var username = elems[0].value                     // we are just hardcoding the value
//     var password = elems[1].value


//     var payload = {
//         username: username,
//         password:password
//     }

//     console.log(username,password)   // it will print the output to console

//     var xhr = new XMLHttpRequest();
//     xhr.open('POST','https://reqres.in/api/login')

//     xhr.onload = function(){
//         console.log(this.response)
//         if(this.status === 200){                             // we are doing to handle the error which will come if we don't give password properly

//             handleSuccessLogin(JSON.parse(this.response))
//         }
//         else{
           
//             handleError(JSON.parse(this.response))
//         }
//     }

//     xhr.onerror = function(){
//         alert('oneerror')
//     }

//     xhr.setRequestHeader('Content-Type','application/json;charset=utf-8')  // declaring what type of XMLHttp is

//     xhr.send(JSON.stringify(payload))    //we just cant push the ocject data directly into payload so we need to do stringfy( we will get error before so to remove error we need to specify what kind of data it is)


// }

// function handleSuccessLogin(response){
//     var token = response.token
//     var res = document.getElementById('res') // doing the dom part
//     res.innerHTML= token
// }

// function handleError(response){
//     var error = response.error
//     var res = document.getElementById('res') // doing the dom part
//     res.innerHTML= error

// }






// function getUserlist(){
//     var xhr = new XMLHttpRequest();

//     xhr.open('GET','https://reqres.in/api/users?page=1')

//     xhr.send()
//     xhr.onload = function(){
//         // console.log(this.response,typeof this.response)
//         var response = JSON.parse(this.response)     // interacting with sersver by replacing the XML with JSON (its converting its into objects)
        
//         // console.log(data.data)
//         handleResponse(response)


//     }
// }


// function handleResponse(data){    // varible name is there and we are passing data.data
//     renderDOM(data.data)


// }


// function renderDOM(arr){
   
//     var res = document.getElementById('res')
//     res.innerHTML=""
//     var div = document.createElement('div');
//     var ul = document.createElement('ul');

//     for(var i=0;i<arr.length;i++){
//         var li = document.createElement('li')
//         li.textContent = "email: " +arr[i].email + ",Name" + arr[i].first_name;
//         ul.append(li)
//     }
//     div.append(ul)
//     res.append(div)



// }


// // We are responding to user from the informaton which are send by the api 