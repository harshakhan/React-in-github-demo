var arr =[]
window.onload = function(){
    fetch("https://xkcd.now.sh/?comic=latest")
    // .then((res)=>console.log(res.json()))
    .then(res=>res.json())  // u get the promises with result
                            // then strore the result in res

    .then((res)=>getComic(res.num,10))  // here we can acess using the dot operator

}

function getComic(num,total){
    if(total ==0){
        return
    }
    fetch(`https://xkcd.now.sh/?comic=${num}`)
    .then((res)=>res.json())
    .then((res)=>{
        arr.push(res)
        // using recursion
        getComic(num-1,total-1)
    })
    printComics(arr)   // so here we are basically fetching the each response and passing that to the global array

}

// renderDom
function printComics(){
    var res = document.getElementById('res')
    res.innerHTML=" "

    var div = document.createElement("div")
    for(var i=0;i<arr.length;i++){
        var h3= document.createElement('h3')
        h3.textContent=arr[i].num+" "+arr[i].title
        var img = new Image(500,200)
        img.src=arr[i].img
        img.alt = arr[i].alt
        div.append(h3,img)
    }
    console.log(arr.length)
    res.append(div)
}