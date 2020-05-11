function program(input) {
    // input
    // write code here
    //  return output
    input=input.split('\n')
    var target=Number(input[1])
    input=input[0].split('')
    var count=0
    for(var i=0;i<input.length;i++){
        if(Number(Number(input[i])==target)){
            count+=1
        }
        console.log(count)
    }
    // if(count ===1){
    //     return(count=-1)
    // }
    // return(count)
}


module.exports = program