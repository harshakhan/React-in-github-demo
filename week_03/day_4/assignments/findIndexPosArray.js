function program(input) {
    // input
    // write code here
    //  return output
    input=input.split('\n')
    var num=Number(input[1])
    array=input[0].split(' ')
    for (var i=0;i<array.length;i++){
        if(Number(array[i])== num){
            return(i)
        }
       
    }
    return -1
}


module.exports = program