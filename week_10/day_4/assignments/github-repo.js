window.onload=function(){
    var btn=document.querySelector("button")
    btn.addEventListener("click",handleInput)
    
}
//?q=tetris+language:assembly&sort=stars&order=desc
function handleInput(){
    var input=document.getElementById("search").value
    var xhr=new XMLHttpRequest()
    var sort=document.getElementById("sort").value

    var order=document.getElementById("order").value
    console.log(sort,order)
    
    xhr.open("GET","https://api.github.com/search/repositories?q="+input+"&sort="+sort+"&order="+order)
    
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')

    xhr.send()

    xhr.onload=function(){
        var x=JSON.parse(this.response)
        console.log(x)
        if(x.incomplete_results==false){
            console.log(x.items)
            renderDom(x.items)
        }
       
    }
}

function renderDom(arr){
    console.log(arr)

  
    
    var div = document.createElement("div")
    var ol = document.createElement("ol")
    for (var i = 0 ; i < arr.length ; i++){
        var li = document.createElement("li")
        var li1 = document.createElement("p")
            li1.textContent = "language : " +arr[i].language
            li2 = document.createElement("a")
            li2.setAttribute("href", arr[i].html_url)
            li2.textContent = "link to repo :"+arr[i].html_url
            li3 = document.createElement("p")
            li3.textContent="description :"+arr[i].description
            li.append(li1,li2,li3)
            ol.append(li)
            console.log(arr[i].language)
    }
    div.append(ol)
    var x = document.getElementById("res")
    x.innerHTML = " "
    
    x.append(div)
}