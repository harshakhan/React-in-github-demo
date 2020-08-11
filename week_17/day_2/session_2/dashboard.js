async function verifyCode(){
    let input = document.getElementById("ifsc_input").value
    let target = document.getElementById("display_ifsc")
    if(input != ""){
    let url = "https://ifsc.razorpay.com/"+input
   try{
       await fetch(url).then(response => response.json())
       
      .then(data => {
        target.innerHTML = `<div class=row><i class="far fa-check-circle h1 text-success"></i><div class="col-10">
         <div class="alert alert-success col-2" role="alert">
            <p class="h6" id="token">success</p>
        </div></div></div>
       <p class="h5 text-warning">Bank Details</p>
        <p>Branch Name : ${data.BRANCH}</p>
        <p>Bank Name : ${data.BANK}</p>
        <p>IFSC Code : ${data.IFSC}</p>
        <p>Address : ${data.ADDRESS}</p>
        <p>City : ${data.CITY}</p>
        <p>District : ${data.DISTRICT}</p>
        <p>State : ${data.STATE}</p>
        <p>Contact No : ${data.CONTACT}</p>`
      })
     

   }
    catch(error){
        target.innerHTML = `<div class="col-10">
        <div class="alert alert-warning" role="alert">
            <p class="h5" id="token">Invalid</p>
        </div></div>`
    
    }
}
    else {
       target.textContent = "Enter IFSC Code" 
    }
 }

displayToken= () => {
    let token = document.getElementById("token")
    let query = window.location.search
    if(query != ""){
        let url = new URLSearchParams(query)
        token.textContent = `Token : ${url.get("token")}`
    }
    
}
show = () => {

    displayToken()
    let log_form = document.getElementById("verify_code")
    log_form.addEventListener("click", verifyCode)

    
}
window.addEventListener("load", show)