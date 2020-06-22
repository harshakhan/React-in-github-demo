function AllPersons(){
    this.data = []
    this.add = function(payload){
        this.data.push(payload)
    }
    this.getData = function(){
        return this.data
    }

    this.sortBy = function(orderBy){
        return this.data.sort(function(a,b){
            if(orderBy==='asc'){
                return a.age-b.age
            }
            else if(orderBy==='desc'){
                return b.age-a.age
            }
        })
    }
}

var persons = new AllPersons()

function Person(name,age,hobbies){
    // this = {}
    this.name = name;
    this.age = age;
    this.hobbies = hobbies.split(',');
    this.display = function(){
        console.log( this.name )
    }
    this.getFormatedData = function(){
        return "Name: "+this.name +" Age: " +this.age + " Hobbies: " + this.hobbies.join(",")
    }
}
var handleSubmit = function(){
    event.preventDefault();
    var input = event.target.querySelectorAll('.input');
    
    var name = input[0].value
    var age = input[1].value
    var hobbies = input[2].value

    var obj = new Person(name, age, hobbies)
    
    persons.add(obj)
    renderDOM()
}

window.onload = function(){
    var form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}

function renderDOM(){
    var div = document.getElementById('res')
    div.innerHTML = ""

    elem = document.createElement('div')
    
    persons.getData().forEach(function(person){
        var innerDiv = document.createElement('div')
        innerDiv.innerHTML = person.getFormatedData()
        elem.append(innerDiv)
    })

    div.append(elem)
}