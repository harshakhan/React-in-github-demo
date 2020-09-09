function MyArray(){
    Object.defineProperty(this,'length',{
        value:0,
        enumerable:false,
        writable:true
    })
}

MyArray.prototype.push = function(value){
    this[this.length] = value;
    this.length++;
    return this.length

}


MyArray.prototype.pop = function(value){   // pop doesnot take an element
    if(this.length ===0){
        return

    }
    this.length--;
    var elem = this[this.length];  //we are doing this to return the elements
    delete this[this.length]
    return elem

}

MyArray.prototype.forEach = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index,this)
        }
    }
}

MyArray.prototype.map = function(callback){
    var result =new MyArray()
    for(var index in this){
        if(this.hasOwnProperty(index)){
            result.push(callback(this[index], index,this))
        }
    }
    return result
}

MyArray.prototype.filter = function(callback){
    var result = new MyArray();
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var response = callback(this[index], index,this)
            if(response){
                result.push(this[index])
            }
        }
    }
    return result
}

MyArray.prototype.reduce = function(callback,acc){
    acc=acc || 0

    for(var index in this){
        if(this.hasOwnProperty(index)){
            acc= callback(acc,this[index],index,this)
        }
    }
    return acc

}


var arr = new MyArray()
arr.push(10)
arr.push(20)
arr.push(30)
arr.push(40)
arr.push(50)
console.log(arr)
arr.pop()
console.log(arr)


arr.forEach(function(item,index,arr){
    console.log(item,index,arr)
})

var test = arr.map(function(item){
    return item*item
})

console.log(test)

test = test.filter(function(item){
    return item>500
})

console.log(test)

var sum = arr.reduce(function(acc,item){
    return acc+item
})

console.log(sum)


function Queue(){
    MyArray.call(this)
    Object.defineProperty(this,'max',{
        value:5,
        enumerable:false,
        writable:false
    })
}

Queue.prototype =Object.create(MyArray.prototype)

Queue.prototype.dequeue = function(){
    if(this.length===0){
        console.log('queue is empty')
        return
    }
    var elem = this[0]
    for(var i=0;i< this.length-1; i++){
        this[i] =this[i+1]
    }
    this.length--
    delete this[this.length]
    return elem
}

var q = new Queue()

q.push(10)
console.log(q.dequeue())
console.log(q)