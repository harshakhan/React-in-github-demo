var person=[]

function Person(name,age,hobbies){
    this.name = name;
    this.age = age;
    this.hobbies  = hobbies.split(',');
    this.display = function(){
        console.log(this.name)
    }
    this.getFormateData = function(){
        return "Name:"+ this.name+"Age:" + this.age + "Hobbies:" + this.hobbies.join(',')
    }
}

var handleSubmit = function(){
    event.preventDefault();
    var input = event.target.querySelectorAll('.input');
                                                        // var payload ={}

                                                        // for(var i =0; i< input.length;i++){
                                                        //     payload[input[i].name]= input[i].value
                                                        // }

                                                        // when we use it do it like object as shown above


    var name = input[0].value
    var age = input[1].value
    var hobbies = input[2].value

    var obj = new Person(name,age,hobbies)

    person.push(obj)
    renderDOM()
    


   
}

window.onload = function(){
    var form = document.querySelector('form')
    form.addEventListener("submit",handleSubmit)

}

function renderDOM(){
    var div = document.getElementById('res')  // fetching the elems
    div.innerHTML=""

    elems = document.createElement('div')   // creating the elems dynamically

    person.forEach(function(person){
        var innerDiv = document.createElement('div')
        innerDiv.innerHTML = person.getFormateData()
        elems.append(innerDiv)


    })
    div.append(elems)
}

