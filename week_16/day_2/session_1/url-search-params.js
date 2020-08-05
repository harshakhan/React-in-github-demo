// window.addEventListener("DOMContentLoaded",()=>{
//     let query = window.location.search;
//     if(query!==''){
//         loadQuery(query);
//     }
// })

// function loadQuery(query){
//     let url = new URLSearchParams(query)
//     console.log(url.get('page_no'))
//     console.log(url.get('q'))
//     console.log(url.get('r'))


//     for(let key of url){    // it will return the key and the value pair.
//         console.log(key)
//     }
// }


//-----------------------------------------------------------------------------------------

// lets start with the implementation part




window.addEventListener("DOMContentLoaded",()=>{
    let query = window.location.search;
        loadQuery(query);
        const output = document.getElementById('output');
        output.addEventListener('click',handlePageChange)

})

function handlePageChange(){
    if(event.target.name !=='page'){
        return
    }
    const page = Number(event.target.textContent)
    let param = new URLSearchParams( window.location.search);
    param.set('page_no',page)
    loadQuery(param.toString());

}


async function loadQuery(query){
    let url = new URLSearchParams(query)
    let q= url.get('q')
    if(q === null){
        q=""
    }
   
    let page_no= url.get('page_no')
    if(page_no === null){
        page_no=1
    }
   // request usig promise

   try{
       let res = await fetch(`https://api.github.com/search/users?q=${q}&page=${page_no}`)
        .then(res=>res.json())
       renderDOM(res,page_no)
       console.log(res)

   }
   catch(err){

   }
}

function renderDOM({items,total_count},activePage){
    const total = document.getElementById('total_count');
    const output = document.getElementById('output');
    output.innerHTML=""
    total.textContent = total_count
    console.log(items)
    const totalPages = Math.ceil(total_count/30)
    console.log(totalPages)

    const frag = document.createDocumentFragment();
    const pages = document.createElement('div')
    pages.style.display = "flex";
    pages.style.flexDirection='row';

    for(let i = 1;i<=totalPages;i++){
        const button = document.createElement('button')
        button.textContent=i
        button.name='page'
        if(Number(activePage) === i){
          
            button.style.background="aqua"
            button.disabled = true
        }
        pages.append(button)
    }
    frag.append(pages)

    items.forEach(item=>{
        const div = document.createElement('div')
        const login = document.createElement('p')
        login.textContent = item.login
        div.append(login)
        frag.append(div)
    })
    output.append(frag)

}