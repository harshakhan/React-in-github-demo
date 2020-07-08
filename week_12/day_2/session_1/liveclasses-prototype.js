var arr = new Array(5).fill(5)

arr.forEach(function(item,index){
    console.log(index)
})
console.log(arr)

//--------------------------------------------------


// function Person(name,age,energy){   // creating constructor
//     this.name = name  // storing the data in this.name and so
//     this.age = age
//     this.energy = energy
//     this.eat = function(value){
//         console.log(this.name,'is eating')
//         this.energy +=value
//         console.log('new energy is', this.energy)
//     }
// }

// var haren = new Person('haren',23,50)

// console.log(haren)

// haren.eat(10)

// console.log(haren)


//point
// we can see that the we can store data with the varibale


//-----------------------------------------------------------------------------

// now using  the prototype key it will now help to reuse the same function.

// function Person(name,age,energy){   // creating constructor
//     this.name = name  // storing the data in this.name and so
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// var haren = new Person('haren',23,50)

// console.log(haren)

// haren.eat(10)

// console.log(haren)


// the difference is that the eat property which was there before is no more seen now.
// So, there is a method to call the eat data , So it generally used when we just need the data without intraption of other data.


//------------------------------------------------------------------------------------

//In contest of rutik question this example


// function Person(name,age,energy){   
//     this.name = name  
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// function Coder(name,age,energy,language){  // creating new function with a constructor
//     this.name = name;
//     this.age = age;
//     this.energy = energy;
//     this.language = language;

// }

// var haren = new Person('haren',23,50)

// var paven = new Coder('paven',25,30,'javascript')

// console.log(paven)



// here  we are getting only the coder data person data is not being invoked


//--------------------------------------------------------------------------------------------------------
// here we are able to call Person function as reference and able to pass name , age, energy there and it will creted all the keys for us

// function Person(name,age,energy){   
//     this.name = name  
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// function Coder(name,age,energy,language){  // 
//     Person.call(this,name,age,energy) // here we are using the calling function to do that to invoked the function
//     this.language = language;

// }

// var haren = new Person('haren',23,50)

// var paven = new Coder('paven',25,30,'javascript')

// console.log(paven)



// so here we are not able to invoke the paven.eat as it will show an error 
// As because we are only invoking the Person function
//So to overcome that we will use another prototype which will be shown below.

//-------------------------------------------------------------------------------------------------------

// function Person(name,age,energy){   
//     this.name = name  
//     this.age = age
//     this.energy = energy
    
// }


// Person.prototype.eat = function(value){
//     console.log(this.name,'is eating')
//     this.energy +=value
//     console.log('new energy is', this.energy)
// }

// function Coder(name,age,energy,language){  // 
//     Person.call(this,name,age,energy) // here we are using the calling function to do that to invoked the function
//     this.language = language;

// }

// Coder.prototype = Object.create(Person.prototype)  // (Object.create) its kind of using the inheritance
//                                                   // so now Coder.prototype inherits the property of the person.protype

// var haren = new Person('haren',23,50)

// var paven = new Coder('paven',25,30,'javascript')

// console.log(paven)

// paven.eat(40)

// using inheritance property we are able to pass Person.prototype to the Coder.protiotype.
// Now the Coder.prototype inherits the property of the person prototype.
// So here  mainly to constructor want to invoke the each other propety so above process can be used

//-----------------------------------------------------------------------------------

//Different example by albert

//So insted of arr we can use string also
// So here we will showing premitive data type which we also called a special type of object

// var str = new String('hello')
// var bool = new Boolean(true) 


// console.log(str)  
// console.log(str.valueOf())
// console.log(typeof str)
// console.log(bool)

// So here we will be getting the [String: 'hello'] this type of output which we also called a wrapper classes.
// So to handle the premitive data type we use valueOf() to get the exact the data

//----------------------------------------------------------------------------
// So here bascially to show how the function are like object in js
// so here it return the length of the object which is 4 here


// var string = 'abcd'

// console.log(string.length)
// console.log(string.toString()) // converting it into string
// console.log(string.toUpperCase()) // converting it into the uppencase

//--------------------------------------------------------------------------------

// Now we will be understanding the higher order function

// var arr=[]

// // console.log(arr.length)
// // arr[0]= 5
// // console.log(arr)
// // arr[1] = 7
// // console.log(arr)
// // console.log(arr.length)

// arr[arr.length] = 5  // so here we can do arr[arr.length] insted of arr[0]
// arr[arr.length]= 10




// console.log(arr)


// So here we are givin an value and we are pushing it 

//----------------------------------------------------
