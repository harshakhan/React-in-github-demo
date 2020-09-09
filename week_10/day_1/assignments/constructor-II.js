function Task(title)
{
    this.title=new String(title);
    this.status=false; 
    this.date=new Date().toLocaleString()  
    this.toggle_task=function(){
        if(this.status===false){
            this.status= true
        }
        else{
            this.status= false
        }
    }

    
}

var task=new Task("Buy Milk")


task.toggle_task()

console.log(task)