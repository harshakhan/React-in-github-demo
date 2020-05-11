function program(input) {
    // input
    // write code here
    //  return output
    input=input.split('\n')
    var num=Number(input[1])
    array=input[0].split(' ')
    var count=0;
    for(var i=0;i<array.length;i++){
        if(Number(Number(array[i]))==num){
            count+=1;
        }
        // console.log(count)
    }
    if(count ===0){
        return (count=-1)
    }
    return (count)
}


module.exports = program