
    // You need to fetch the latest 10 comics using this api
    // The order needs to be maintained. do this while fetching.
    // Show the date, Title and image and style the page for responsiveness
//-----------------------------------------------------------------------------------


var arr =[]  // globall array


window.addEventListener('DOMContentLoaded',()=>{
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(res=>res.json())
    .then( res =>{
        arr.push(res)
        let prom =[]
            for(let i =0;i<9;i++){
                prom[i] = getComic(res.num -1-i)
                // .then(res=> arr.push)
            }
            return Promise.all(prom)
       
    })
    .then(res=>{
        arr.push(...res)
        console.log( arr)
    })
})

function renderToDom(item,target){

}


// fetch("https://xkcd.now.sh/?comic=latest")
// .then(res=>res.json())
// .then( res =>{
//     arr.push(res)
//     getComic(res.num-1,9)
   
// })


function getComic(num){
   
    return fetch(`https://xkcd.now.sh/?comic=${num}`)
    .then(res=>res.json())
    .catch(err=> err.message)

}