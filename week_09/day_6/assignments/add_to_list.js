window.onload = function(){
    var btn = document.getElementById('btn')
    btn.addEventListener("click",addTodo)

}

function getData(){
    return JSON.parse(localStorage.getItem('names'))
}

function addTodo(){
    var name = document.getElementById('name').value
    var role = document.getElementById('role').value
    var password = document.getElementById('password').value
    


    var arr = getData() || []

    arr.push({name,role,password})
    localStorage.setItem('names',JSON.stringify(arr))

    renderDOM(arr)
}


function renderDOM(data){


    if(!data){
        return
    }
    var ul = document.querySelector("ul")
    ul.innerHTML=""


    for( var i=0;i<data.length ; i++){
        var li = document.createElement('li')
        li.textContent ="name:"+ data[i].name + " role:"+data[i].role + " pass:" +data[i].password
        ul.append(li)
    }
}