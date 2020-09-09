var get_res= document.getElementById("res")
function WindowTask(title)
{
    this.title= title
    this.status= false
    this.date= new Date
       
    this.display= function(){        
        get_res.innerHTML= "Title is: "+ this.title + ". Status is: "+this.status+". Date is: "+ this.date
        console.log(this.title)
    }    
   
}
window.onload= function(){    
    var form= document.querySelector("#form")

    form.addEventListener("submit", handle_submit)
   
}
function handle_submit()
{
    event.preventDefault()
    var get_title= document.getElementById("Title").value
    var obj= new WindowTask(get_title)
    obj.display() 
   
}