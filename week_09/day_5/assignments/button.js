window.onload = function () {
    var btn = document.querySelector("#btn")
    btn.addEventListener("click", showNext)
}
var arr = []
var counter = 1

function showNext() {
   if(counter>0){
        for (var i = counter; i < counter + 2; i++) {
            var num_btn = document.createElement("button")
            console.log("like")
            num_btn.textContent = i
           
            num_btn.setAttribute("id", "div" + i)
            num_btn.setAttribute("class", "card")
            num_btn.addEventListener("click", get)
            var sec = document.querySelector("#cont")
            sec.append(num_btn)
            arr.push("div" + i)
        }
        counter=counter+2
        

    }
}



function get(event) {
    var x = event.target.id
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            var h = document.getElementById("display")
            h.textContent = i + 1
            alert(i + 1)

        }
    }
}


