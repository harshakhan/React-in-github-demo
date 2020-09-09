// Create our own array

// function MyArray(){
//     this.length = 0
// }

// //push
// //pop
// //map
// MyArray.prototype.push= function(elem){
//     this[this.length]=elem
//     this.length++
//     return this.length
// }

// MyArray.prototype.pop = function(){
//     this.length--
//     var popElem = this[this.length] //storing the element
//     delete this[this.length]
//     return popElem
// }
// //0,1,2

// var arr = new MyArray()

// arr.push('Masai')
// arr.push('School')
// arr.push('Bangalore')
// arr.pop()

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr)


// we are here removing the last element from the array with pop operator

//----------------------------------------------------------------------------------------------
// for in object
// it loops through  all the enumerable properties of an object
//map returns aray

function MyArray(){
   
    Object.defineProperty(this,'length',{
        value:0,
        enumerable: false,
        writable: true
    })
   
}

//push
//pop
//map
MyArray.prototype.push= function(elem){
    this[this.length]=elem
    this.length++
    return this.length
}

MyArray.prototype.pop = function(){
    this.length--
    var popElem = this[this.length] //storing the element
    delete this[this.length]
    return popElem
}
 MyArray.prototype.map = function(cb){
     var result = new MyArray()
     for(index in this){
         if(this.hasOwnProperty(index)){
            result.push(cb(this[index],index, this))
         }
     }
     return result
 }

 // map take the couple of argument = current elements, index,arr

var arr = new MyArray()

arr.push(100)
arr.push(200)
arr.push(300)
arr.pop()

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])


var res = arr.map(function(val){
    console.log(val)
    return val*val
})

console.log(res)


// return the square of the value

//--------------------------------------------------------------------------------------



