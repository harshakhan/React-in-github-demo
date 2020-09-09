import $ from './jquery_lib.js'
window.onload= function()
{
    $("li")  
      
    var elem= $("li").each(function(item, index){        
        console.log(item, index)
    })    
    console.log(elem, "aa")    
    var get_show_btn= document.getElementById("show_btn")
    get_show_btn.addEventListener("click", show_elem)    
    var get_hide_btn= document.getElementById("hide_btn")
    get_hide_btn.addEventListener("click", hide_elem)
}
function show_elem()
    {
        $("li").show()   
    }
function hide_elem()
    {
        var elem= $("li").hide()
    }