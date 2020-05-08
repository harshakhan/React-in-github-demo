function program(input) {
    // input
    // write code here
    var arr=input.split('')
    var temp
    // console.log(arr)
    for(var i=0;i<arr.length/2;i++){
        temp=arr[arr.length-1-i]
        arr[arr.length-1-i]=arr[i]
        arr[i]=temp
    }
    return arr.join('')


}


module.exports = program