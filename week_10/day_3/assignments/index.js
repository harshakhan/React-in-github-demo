var customerDetails =[];
window.addEventListener("DOMContentLoaded",function(){
    var form = document.querySelector('form')
    form.addEventListener('submit',function(){
        event.preventDefault()

        handleSubmit()
    })

    var btn = document.querySelector('#displayButton')
    btn.addEventListener('click',displayDetails)
})


function handleSubmit(){
    var form = new FormData(event.target)

    // console.log(form.get('first_name'))

    var first_name = form.get('first_name')    // this are the information
    var last_name = form.get('last_name')
    var dob = form.get('date_of_birth')
    dob = new Date(dob).toLocaleString()
    var balance = form.get('balance')
    var acc_number = form.get('account_number')
    var acc_holders = form.get('shared_account_holders')

    var customer = new Customer(first_name,last_name ,dob,balance,acc_number,acc_holders)
    customerDetails.push(customer)
    console.log(customerDetails)

}

//PASSING THE INFORMATION TO THE CONSTRUCTOR

function Customer(first_name,last_name ,dob,balance,acc_number,acc_holders){
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = dob;
    this.balance = Number(balance);
    this.acc_number=Number(acc_number);
    this.acc_holders = acc_holders.split(',');
    this.displayDetails = function(){                 // return string  with all the keys and names
        var out ="First Name:" + this.first_name+"\n"
         out +="Last Name:" + this.last_name+"\n"
         out +="Date of Birth:" + dob+"\n"
         out +="Balance:" + this.balance+"\n"
         out +="Account Number:" + this.acc_number+"\n"
         out +="Share Account Holder:" + this.acc_holders
         return out



    }
}


function displayDetails(){
    var res = document.getElementById("displayContainer")
    res.innerHTML=""
    customerDetails.forEach(function(customer){
        var div = document.createElement('div')
       div.textContent= customer.displayDetails()

       //dont directly append to dom in a for loops
       res.append(div)
    })

}