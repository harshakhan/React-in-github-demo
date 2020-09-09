window.addEventListener("DOMContentLoaded", function(){
    let form = document.getElementById('form')
    form.addEventListener('submit',handleSubmit)
})

function handleSubmit(){
    event.preventDefault()
    const form = new FormData(event.target)
    let q = form.get('query')
    let page_no = form.get('page_no')
    console.log(q,page_no)


    let params = new URLSearchParams()
    params.append('q',q)
    params.append('page_no',page_no)
    console.log(params.toString())
    let url = "url-search-params.html"
    window.location.assign(url+"?"+ params.toString())
}