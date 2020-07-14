var arr = []
window.onload = function () {
    var btn = document.getElementById("submit")
    btn.addEventListener("click", handleSubmit)
}

function handleSubmit() {
  
    var issues = document.getElementById("inputState").value

    var description = document.getElementById("exampleFormControlTextarea1").value
  
    var date = "14 july 2020"
  

    var data = {
        issues: issues,
        description: description,
        date: date,
        id: arr.length + 1

    }
    // console.log(data)
    arr.push(data)
    renderDom(arr)
}

function renderDom(arr) {
    var target = document.querySelector(".table")
    // target.innerHTML=" "
    // console.log(target)
    
   
    for (var i = 0; i < arr.length; i++) {
        var row = createRow(arr[i])
        // console.log(row)
        target.append(row)
    }

}


function createRow(data) {
    var issues = data.issues
    var description = data.description
    var date = data.date
    // console.log(issues,description,date)
 
    var res=document.getElementById("res")
    res.innerHTML=" "
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.textContent = issues
    var td2 = document.createElement("td")
    td2.textContent = description
    var td3 = document.createElement("td")
    td3.textContent = date
    
    tr.append(td1, td2, td3)
    res.append(tr)

    return (tr)
}



