import $ from "./jQuery.js"

var elem = $("div").each(function(item,index){
    item.textContent = index*100
}).each(function(item,index){
    item.textContent ="index is:" + index 
})
console.log(elem)