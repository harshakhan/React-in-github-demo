window.onload = function () {
    var btn = document.getElementById("submit")
    btn.addEventListener("click", handleSubmit)
}



function sleep(time) {
    return new Promise((resolve, reject) => {
        if (!time || typeof time!=="number") {
            reject({
                success:false,
                message:'Invalid arguments'
            })
        }
        else{
            setTimeout(() => resolve({
                success:true,
                message:"success"
            }), time);
        }
        
    })
    
   }  
   


   function handleSubmit() {
    var time = document.getElementById("input").value
    time=Number(time)
    //  console.log(time)
    
    sleep(time)
    
    sleep(time).then((message) => {
        var res=document.getElementById("res")
        res.innerHTML=""
        var p=document.createElement('p')
        p.style.color="green"
        p.textContent=message.success +"  "+ message.message
        res.append(p)
     }).catch((err)=>{
         var res=document.getElementById("res")
         res.innerHTML=""
         var p=document.createElement('p')
         p.style.color="red"
         p.textContent=err.success  +"  "+  err.message
         res.append(p)
     })
}