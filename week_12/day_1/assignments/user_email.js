function make_and_append_card(){
    event.preventDefault()
    
    var get_email = document.getElementById("user_email").value
    var get_address = document.getElementById("user_address").value

    var person={
        email:get_email,
        address:get_address
    }
    display.call(person)
}

function display(){
    var card_div = document.getElementById('card_div')
    var card = document.createElement('div')
    card.setAttribute('class','card')
    var card_body = document.createElement("div")
    card_body.setAttribute('class',"card-body")
    var p_email = document.createElement('p')
    p_email.innerHTML ="<strong>Email:</strong>"+this.email
    var p_address  = document.createElement("p")
    p_address.innerHTML = "<strong>Address:</strong>" + this.address
    card_body.append(p_email,p_address)
    card.append(card_body)
    card_div.append(card)
   
}