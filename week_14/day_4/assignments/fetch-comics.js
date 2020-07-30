
    // You need to fetch the latest 10 comics using this api
    // The order needs to be maintained. do this while fetching.
    // Show the date, Title and image and style the page for responsiveness
//-----------------------------------------------------------------------------------


var arr =[]  // globall array


window.addEventListener('DOMContentLoaded',()=>{
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(res=>res.json())
    .then(res => getComicRec(res.num,10))
    // .then( res =>{
    //     arr.push(res)
    //     let prom =[]
    //         for(let i =0;i<9;i++){
    //             prom[i] = getComic(res.num -1-i)
    //             // .then(res=> arr.push)
    //         }
    //         // console.log(prom)
    //         return Promise.all(prom)
       
    // })
    // .then(res=>{
    //     console.log('responses',res)
    //     arr.push(...res)
    //     const output = document.getElementById('out')
    //     arr.forEach( item =>{
    //         renderToDom( item, output)
    //     })
    // })
})

function renderToDom(item,target){
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.textContent =item.num+ " " + item.title
    const img = new Image(300)
    img.src = item.img
    img.alt = item.alt
    div.append(h3,img)
    target.append(div)

}


// fetch("https://xkcd.now.sh/?comic=latest")
// .then(res=>res.json())
// .then( res =>{
//     arr.push(res)
//     getComic(res.num-1,9)
   
// })


// function getComic(num){
   
//     return fetch(`https://xkcd.now.sh/?comic=${num}`)
//     .then(res=>res.json())
//     .catch(err=> err.message)

// }


function getComicRec(num,total,cb){
    if(total === 0) return
   
    return fetch(`https://xkcd.now.sh/?comic=${num}`)
    .then(res=>res.json())
    .then(res=>{
        const output = document.getElementById('out')
        renderToDom(res, output)
        getComicRec(num-1,total-1)
    })
    .catch(err=> err.message)

}