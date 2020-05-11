function program(input) {
    // input
    // write code here
    //  return output
    input= input.split(' ').map(Number);
    var  obj={}
    for(var i=0;i<input.length;i++){
        var elem =input[i]
        obj[elem]=elem
    }
    console.log(obj)
    return Object.values(obj).join(' ')
}


module.exports = program