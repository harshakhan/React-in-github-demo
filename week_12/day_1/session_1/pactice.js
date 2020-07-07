// this,call,apply,bind ,use-strict

// implicit binding

var person ={
    name: "harewn",
    age:43,
    type:"person",
    display: function(){
        console.log(this.type,'is',this.name)
    }
}
person.display()


