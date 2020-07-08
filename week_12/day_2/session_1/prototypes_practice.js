// prototypes
// function Person(name,energy){

//     var person ={}
//     person.name = name
//     person.energy = energy

//     person.eat = function(amount){
//         console.log(this.name,'is eating')
//         this.energy +=amount
//     }


//     person.sleep = function(time){
//         console.log(this.name,'is sleeping')
//         this.energy += time
//     }


//     person.code = function(time){
//         console.log(this.name,'is coding')
//         this.energy -= time
//     }
//     return person


// }

// var sai = Person("Sai",16)
// var jay = Person("Jay",19)

// console.log(sai)
// console.log(jay)


//-------------------------------------------------


// function Person(name,energy){

//     var person ={}
//     person.name = name
//     person.energy = energy

//     person.eat = function(amount){
//         console.log(this.name,'is eating')
//         this.energy +=amount
//     }


//     person.sleep = function(time){
//         console.log(this.name,'is sleeping')
//         this.energy += time
//     }


//     person.code = function(time){
//         console.log(this.name,'is coding')
//         this.energy -= time
//     }
//     return person


// }

// var sai = Person("Sai",16)
// var jay = Person("Jay",19)

// sai.code(10)
// jay.sleep(12)

//---------------------------------------------------------------

//TO AVOID REDUDANCY WE WILL USE ANOTHER OBJECT TO STOTRE ALL THE DATA THERE

// var personMethods={

//     eat:function(amount){
//         console.log(this.name,'is eating')
//         this.energy +=amount
//     },
//     sleep:function(time){
//         console.log(this.name,'is sleeping')
//         this.energy += time
//     },
//     code: function(time){
//         console.log(this.name,'is coding')
//         this.energy -= time
//     }
// }
// function Person(name,energy){

//     var person ={}
//     person.name = name
//     person.energy = energy
//     person.eat = personMethods.eat
//     person.sleep = personMethods.sleep
//     person.code = personMethods.code
   
//     return person


// }

// var sai = Person("Sai",16)
// var jay = Person("Jay",19)

// sai.code(10)
// jay.sleep(5)

// console.log(sai)
// console.log(jay)


// after this also smae the function will be shown with object
//---------------------------------------------------
//Object.crete
// Object.create = it allow you to create object using its own object
// It create it as a parent object 


// var personMethods={

//     eat:function(amount){
//         console.log(this.name,'is eating')
//         this.energy +=amount
//     },
//     sleep:function(time){
//         console.log(this.name,'is sleeping')
//         this.energy += time
//     },
//     code: function(time){
//         console.log(this.name,'is coding')
//         this.energy -= time
//     }
// }
// function Person(name,energy){

//     var person =Object.create(personMethods)
//     person.name = name
//     person.energy = energy
   
//     return person


// }

// var sai = Person("Sai",16)
// var jay = Person("Jay",19)

// sai.code(10)
// jay.sleep(5)

// console.log(sai)
// console.log(jay)

//----------------------------------------------------------------------
//parent object example

// var parent={        // it will act as an parent
//     name:'parent',
//     age:40,
//     country :'india'

// }

// var child = Object.create(parent)  // we are here overiding 
// child.name = 'child'
// child.age = 10

// console.log(child)

//-----------------------------------------------

// prototype inheritance(inbuilt function in js)

// function Person(name,energy){

//     var person =Object.create(Person.prototype)
//     person.name = name
//     person.energy = energy
   
//     return person


// }

//     Person.prototype.eat=function(amount){
//         console.log(this.name,'is eating')
//         this.energy +=amount
//     },
//     Person.prototype.sleep=function(time){
//         console.log(this.name,'is sleeping')
//         this.energy += time
//     },
//     Person.prototype.code= function(time){
//         console.log(this.name,'is coding')
//         this.energy -= time
//     }



// var sai = Person("Sai",16)
// var jay = Person("Jay",19)

// sai.code(10)
// jay.sleep(5)

// console.log(sai)
// console.log(jay)


// it will give the same output which has been used before to nefore


//---------------------------------------------------------------------

// using this keyword



function Person(name,energy){
 
    this.name = name
    this.energy = energy
}

    Person.prototype.eat=function(amount){
        console.log(this.name,'is eating')
        this.energy +=amount
    },
    Person.prototype.sleep=function(time){
        console.log(this.name,'is sleeping')
        this.energy += time
    },
    Person.prototype.code= function(time){
        console.log(this.name,'is coding')
        this.energy -= time
    }



var sai = Person("Sai",16)
var jay = Person("Jay",19)

sai.code(10)
jay.sleep(5)

console.log(sai)
console.log(jay)