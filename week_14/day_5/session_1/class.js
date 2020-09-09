// sugar syntax 
// inheritance'
// share member function 
// private and public
// constructor
// multi level inheritance

// class Rectangle{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;

        
//     }
// }

// let box = new Rectangle(5,10)
// console.log(box)  // Rectangle { height: 5, width: 10 }


//-------------------------------------------------------------------------

// // class are same as prototype chain we are work with

// function Rectangle(height,width){
//     this.height = height;
//     this.width = width
// }

// let box = new Rectangle(5,10)

// console.log(box)  // Rectangle { height: 5, width: 10 }

//-----------------------------------------------------------------

// class Rectangle{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
//     area(){
//         return this.height = this.width
//     }

// }

// let box = new Rectangle(5,10)

// console.log(box.area())  // 10

//--------------------------------------------------

// prototype method

// function Rectangle(height,width){
//     this.height = height;
//     this.width = width
// }
// Rectangle.prototype.area = function(){
//     return this.height*this.width
// }

// let box = new Rectangle(5,10)

// console.log(box.area())   // 50

//-------------------------------------------------------
 
class Person{
    constructor(name,energy){
        this.name = name 
        this.energy = energy
    }

    eat(amount){
        console.log('${this.name} is eating')
        this. energy += amount
    }
    sleep(amount){
        console.log('${this.name} is sleeping')
        this.energy += amount

    }
    code(time){
        console.log('${this.name} is coding')
        this.energy -= time
    }

}

const sai = new Person('Sai',15)

const jay = new Person('Sai',12)


sai.code(5)
jay.sleep(10)