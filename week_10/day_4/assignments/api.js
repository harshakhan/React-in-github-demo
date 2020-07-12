window.onload = function(){
    var form  = document.querySelector("form")
    form.addEventListener('submit',handleForm)
}
function handleForm(){
    event.preventDefault()

    var input = document.getElementById('os').value
    // console.log(input)

    var xhr = new XMLHttpRequest()

    xhr.open('GET','http://localhost:8080/codenames/'+ input)
    xhr.send()

    xhr.onload = function(){
        var data = JSON.parse(this.response)

        // console.log(data)
        handleResponseRequest(data)
    }
}

function handleResponseRequest(data){
    console.log(data.codenames)

    renderDOM(data.codenames)

    
}

function renderDOM(arr){
    var res = document.getElementById('res')
    res.innerHTML=""

    var div = document.createElement('div')

    var ul = document.createElement('ul')
    for(var i =0;i<arr.length;i++){
        var li= document.createElement('li')
        li.textContent="version:" + arr[i].version + "name:"+ arr[i].name
        ul.append(li)
    }
    div.append(ul)
    res.append(div)
}

