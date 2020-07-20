var arr = []
window.onload = function () {
    var btn = document.getElementById("submit")
    btn.addEventListener("click", handleButton)

     
    var filter = document.querySelector("#filter")
    filter.addEventListener('change', handleFilter)
}



function handleFilter(){
    var inputState= event.target.value
    
    var newArr = arr.filter( function(item){
      return item.inputState===inputState
    } )
    
    renderDom(newArr)
  }


function handleButton() {

    var inputState = document.getElementById("inputState").value
    var ProductTitle = document.getElementById("ProductTitle").value
    var productDescription = document.getElementById("productDescription").value
    var productPrice = document.getElementById("productPrice").value

   


    var data = {
        inputState: inputState,
        ProductTitle:ProductTitle,
        productDescription:productDescription,
        productPrice:productPrice,
        id: arr.length + 1

    }
    arr.push(data)
    renderDom(arr)
}

function renderDom(arr) {

    var target = document.getElementById("res")
    target.innerHTML = ""
    createRows()
    var len = arr.length
    console.log(len)
    for (var i = 0; i < arr.length; i++) {
        createRow(arr[i])
    }
}

function createRows() {

    var target = document.getElementById("res")
    var table = document.createElement("table")
    table.setAttribute("id", "table")
    table.style.padding = "32px";
    table.style.margin = "6px";
    table.style.color = "black";
    table.setAttribute("border", "1px")
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = "Product Category"
    var td2 = document.createElement("td")
    td2.textContent = "Product Title"
    var td3 = document.createElement("td")
    td3.textContent = "Product Description"
    var td4 = document.createElement("td")
    td4.textContent = "Product Price"

    tr.append(td1, td2, td3,td4)
    table.append(tr)
    target.append(table)
}


function createRow(data) {
    var inputState= data.inputState
    var ProductTitle = data.ProductTitle
    var productDescription= data.productDescription
    var  productPrice = data.productPrice


    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = inputState

    var td2 = document.createElement("td")
    td2.textContent = ProductTitle

    var td3 = document.createElement("td")
    td3.textContent = productDescription

    var td4 = document.createElement("td")
    td4.textContent = productPrice



    tr.append(td1, td2, td3,td4)
    table.append(tr)

    var target = document.getElementById("table")
    target.append(tr)
}


