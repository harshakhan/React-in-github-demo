var arr = []
window.onload = function () {

    var formInput = document.getElementById("form")
    formInput.addEventListener("submit", createForm)


    
}
function createForm() {
    event.preventDefault()
    var input = event.target.children;
    var data = {
        
        title: input[0].value,
        product1: input[1].value,
        product2: input[2].value,
        product3: input[3].value,
        
    };

    input[0].value = ""
    input[1].value = ""
    input[2].value = ""
    input[3].value = ""



    arr.push(data)
    

    renderDom(arr)
}
function renderDom(arr) {

    var target = document.getElementById("res")
    target.innerHTML = ""

    createTable()
    var len = arr.length
    console.log(len)
    for (var i = 0; i < arr.length; i++) {
        createRow(arr[i])
    }
}

function createTable() {

    var target = document.getElementById("res")
    var table = document.createElement("table")
    table.setAttribute("id", "table")
    table.style.padding = "30px";
    table.style.margin = "5px";
    table.style.color = "black";
    table.setAttribute("border", "4px")
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = "Product Catagory"
    var td2 = document.createElement("td")
    td2.textContent = "Product Title"
    var td3 = document.createElement("td")
    td3.textContent = "Product Describtion"
    var td4 = document.createElement("td")
    td4.textContent = "Product Price"
    
    tr.append(td1, td2, td3, td4,)
    table.append(tr)
    target.append(table)
}

function createRow(data) {
    var name = data.title
    var product1 = data.product1
    var product2 = data.product2
    var product3 = data.product3
   

    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = name

    var td2 = document.createElement("td")
    td2.textContent = product1

    var td3 = document.createElement("td")
    td3.textContent = product2

    var td4 = document.createElement("td")
    td4.textContent = product3
    
    tr.append(td1, td2, td3, td4)
    table.append(tr)

    var target = document.getElementById("table")
    target.append(tr)

}