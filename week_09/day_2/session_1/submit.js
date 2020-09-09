window.onload = function () {
    var button = document.querySelector("#next")
    button.addEventListener("click", showEvent)
}
var data = []
var numCount = 1

function showEvent() {
   if(numCount>0){
        for (var i = numCount; i < numCount + 2; i++) {
            var newInput = document.createElement("button")
            newInput.textContent = i
           
            newInput.setAttribute("id", "div" + i)
            newInput.setAttribute("class", "card")
            newInput.addEventListener("click", get)
            var sec = document.querySelector("#cont")
            sec.append(newInput)
            data.push("div" + i)
        }
        numCount=numCount+2
        

    }
}

function get(event) {
    var y = event.target.id
    var len = data.length;
    for (var i = 0; i < len; i++) {
        if (data[i] == y) {
       
            alert(i + 1)

        }
    }
}


