var arr = []

function show(){
    
    for (var i = 1 ; i <= 81 ; i++){
        var btn = document.createElement("button")
        btn.textContent = i 
        btn.setAttribute("id", "div"+i)
        btn.setAttribute("class", "card")
        btn.addEventListener("click", get)
        var sec = document.querySelector("#cont")
        sec.append(btn)
        arr.push("div"+i)
    }

}

function get(event){
    var x = event.target.id
   for (var i = 0 ; i < arr.length;i++){
       if (arr[i] == x ){
           var h = document.getElementById("display")
           h.textContent = i+1

       }
   }
}