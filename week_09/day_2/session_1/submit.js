window.onload = function () {
    var botton = document.querySelector("#next")
    botton.addEventListener("click", showEvent)
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
    var x = event.target.id
    for (var i = 0; i < data.length; i++) {
        if (data[i] == x) {
       
            alert(i + 1)

        }
    }
}


