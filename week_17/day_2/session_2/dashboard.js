async function code_verify(){
    let ifsc_res = document.getElementById("ifsc_input").value
    let target = document.getElementById("displayDetails")
    if(ifsc_res != ""){
    let url = "https://ifsc.razorpay.com/"+ifsc_res
   try{
       await fetch(url).then(response => response.json())
       
      .then(info => {
        target.innerHTML = `<div class=row><i class="far fa-check-circle h1 text-success"></i><div class="col-10">
         <div class="alert alert-success col-2" role="alert">
            <p class="h6" id="token">success</p>
        </div></div></div>
       <p class="h5 text-warning">Bank Details</p>
        <p>Branch Name : ${info.BRANCH}</p>
        <p>Bank Name : ${info.BANK}</p>
        <p>IFSC Code : ${info.IFSC}</p>
        <p>Address : ${info.ADDRESS}</p>
        <p>City : ${info.CITY}</p>
        <p>District : ${info.DISTRICT}</p>
        <p>State : ${info.STATE}</p>
        <p>Contact No : ${info.CONTACT}</p>`
      })
     

   }
    catch(error){
        target.innerHTML = `<div class="col-8">
        <div class="alert alert-warning" role="alert">
            <p class="h3" id="token">Wrong Data</p>
        </div></div>`
    
    }
}
    else {
       target.textContent = "IFSC Code Missing", 
       target.style.color="red"
    }
 }

showToken= () => {
    let token = document.getElementById("token")
    let query = window.location.search
    if(query != ""){
        let url = new URLSearchParams(query)
        token.textContent = `Token : ${url.get("token")}`
    }
    
}
show = () => {

    showToken()
    let checkForm = document.getElementById("check_ifsc")
    checkForm.addEventListener("click",code_verify)

    
}
window.addEventListener("load", show)