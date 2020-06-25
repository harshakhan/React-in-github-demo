window.onload = function (){
    displayDetails()
}
function displayDetails(){
    var res = document.querySelector('#res')
    var data = loadData()
    if(data.length ===0){
        res.textContent = "there is no information"
        return
    }

    for(var i =0; i<data.length;i++){
        var row = document.createElement('div')

        for(key in data[i]){
            var div = document.createElement('div')
            div.textContent = key + ":" + data[i][key]
            row.append(div)
        }
        res.append(row)

    }

}
function loadData(){
    return JSON.parse(localStorage.getItem('allusers')) || []
}