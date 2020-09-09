// function sum(a){
//     return function(b){  //nested function
//         return a+b
//     }
// }

// var firt = sum(10)
// console.log(first)

// console.log(first(20))

// here we will see that the sum(10) return function to the (first) and then to the first(20)

//here as we can see in the line  return a+b it should through some error right as beacause it fatching the fun a
// when the a is not mentioned inside the function b it kind of searches the element from the parent element which is b
// and then it creates a closure around that function.
// but it does not trough an error due to closure in js\

//-------------------------------------------------------------------

//Creation
//Execution - its read into the function what type of memory and what are function and stores into memory(and from here whole concept of hosting is start)

//Function invokation


//this
//arguments
//other ops




var counter = (function(){  //private variable
    var count = 0;
    function increment(x){
        count = count+x;
        return count
    }
    function decrement(x){
        count = count-x;
        return count
    }
    function value(){
        return count
    }
    return { increment,decrement,value}  //if the return value and the key name is same we can write like this
})()

counter.increment(100)
counter.decrement(5)
console.log(counter.value())

