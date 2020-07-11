var cartArray =[]  //global variable
window.addEventListener('DOMContentLoaded',function(){
    var form = document.querySelector('form')
    form.addEventListener('submit',handleForm)

    var billBtn = document.querySelector('#makebill')
    billBtn.addEventListener('click',handleMakeBill)

})

function handleForm(){
    event.preventDefault();
    var form = new FormData(event.target)
    var name = form.get('name')
    var qty = form.get('qty')
    var price = form.get('price')

    var payload={
        name :name,
        qty:qty,
        price:price,
        id:Date.now()
    }
    
    cartArray.push(payload)
    var elem = createCard(payload)
    var cont = document.querySelector("#cart")
    cont.append(elem)
}

function createCard(payload){
    var div = document.createElement('div')
    var name = document.createElement('p')
    var qty = document.createElement('p')
    var price = document.createElement('p')


    name.textContent = payload.name
    qty.textContent = payload.qty
    price.textContent = payload.price

    div.append(name,qty,price)
    return div
}


function handleMakeBill(){
    if(cartArray.length === 0){
        alert("nothing in the cart")
        return
    }
    var total = makebill.call(cartArray)
    var res = document.getElementById('total-bill')
    res.textContent = "The Total is= RS." +total
}


function makebill(){
    return cartArray.reduce(function(sum,item){
        return sum + item.qty*item.price

    },0)
}

