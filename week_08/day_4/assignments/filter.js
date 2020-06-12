var arr =[] 

window.onload = function(){
    var form = document.querySelector('form');
    form.addEventListener('submit',handleSubmit)


    var filter = document.querySelector('#filter')
    filter.addEventListener('change',handleFilter)
}


function handleSubmit(){
    event.preventDefault();
    var elems= event.target.querySelectorAll(".input");
    var data = getFormData(elems)

    arr.push(data) // adding the data to global array
    renderDOM(arr)
}

function getFormData(elems){
    var formData ={}
    var len = elems.length
    for(var i=0;i<len;i++){
        var key = elems[i].name
        formData[key] = elems[i].value

        if(elems[i].tagName==="INPUT"){  // this is to put the input box blank after every submission.
            elems[i].value= ""

        }
      
    }
    return formData
//    console.log(formData)


}

function renderDOM(arr){

    var div = document.querySelector("#res")
    div.innerHTML=""

    var cont = document.createElement('div')


    var firstRow = createRow({name:"NAME", salary:"SALARY", department:"DEPARTMENT", location:"LOCATION"})   // table header intilizing
    cont.append(firstRow)

    var len = arr.length
    for(var i =0;i<len;i++){
        var row = createRow(arr[i]) //invoking another fun to create
        cont.append(row)  //  appending the row into cont
    }
    div.append(cont)  //appending the cont into div.
}

function createRow(data){
    var name = data.name
    var salary = data.salary
    var dept = data.department
    var loc = data.location



    var div = document.createElement('div')
    div.setAttribute('class','row-item')



    var nameElem = document.createElement('p')
    nameElem.textContent= name

    var salaryElem = document.createElement('p')
    salaryElem.textContent= salary

    var deptElem = document.createElement('p')
    deptElem.textContent= dept


    var locElem = document.createElement('p')
    locElem.textContent= loc


    div. append(nameElem,salaryElem,deptElem,locElem)

    return div


}


function handleFilter(){
    var department = event.target.value

    console.log(department)
    var newArr = arr.filter(function(item){
        return item.department === department
    })
    renderDOM(newArr)
}