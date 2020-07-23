window.onload = function(){
    const data=JSON.parse(localStorage.getItem("data"))
    // console.log(data)
    let body = document.querySelector("body")
    let div = document.createElement("div")
    for(let i=0;i<data.length;i++){
        let h3=document.createElement("h3")
        let p = document.createElement("p")
        h3.textContent=data[i].userName
        p.textContent =data[i].date
        div.append(h3,p)

    }
    body.append(div)
}