var arr = []

var order = "asc";

window.onload = function () {

    var formInput = document.getElementById("form")
    formInput.addEventListener("submit", createForm)


    var sort = document.getElementById("sort")
    sort.addEventListener("change", createOrder)


}


function createForm() {
    event.preventDefault()
    var input = event.target.children;
    var data = {
        status: false, 
        title: input[0].value,
        sales1: input[1].value,
        sales2: input[2].value,
        sales3: input[3].value,
        avg: (Number(input[1].value) + Number(input[2].value) + Number(input[3].value)) / 3,
        id: arr.length + 1
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




function createOrder() {
    order = event.target.value; 
    var subArray =  arr.sort(function (a, b) {
        if (a.avg < b.avg) {
            return order === "desc" ? 1 : -1
        }
        if (a.avg > b.avg) {
            return order === "desc" ? -1 : 1
        }
        return 0
    }) 
    renderDom(subArray)
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
    td1.textContent = "COMPANY NAME"
    var td2 = document.createElement("td")
    td2.textContent = "YEAR 1"
    var td3 = document.createElement("td")
    td3.textContent = "YEAR 2"
    var td4 = document.createElement("td")
    td4.textContent = "YEAR 3"
    var td5 = document.createElement("td")
    td5.textContent = "AVERAGE"
    tr.append(td1, td2, td3, td4, td5)
    table.append(tr)
    target.append(table)
}


function createRow(data) {
    var name = data.title
    var sales1 = data.sales1
    var sales2 = data.sales2
    var sales3 = data.sales3
    var avg = data.avg

    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = name

    var td2 = document.createElement("td")
    td2.textContent = sales1

    var td3 = document.createElement("td")
    td3.textContent = sales2

    var td4 = document.createElement("td")
    td4.textContent = sales3
    
    var td5 = document.createElement("td")
    td5.textContent = avg



    tr.append(td1, td2, td3, td4, td5)
    table.append(tr)

    var target = document.getElementById("table")
    target.append(tr)

}

