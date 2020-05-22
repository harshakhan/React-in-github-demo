function program(input) {
    // input
    // write code here
    //  return outputi

    input=input.split('\n')
    var target =Number(input[1])
    input = input[0].split(' ').map(Number)
    // console.log(input)

    var obj ={}
    for(var i=0; i<input.length; i++){
        var elem = input[i]
        if(obj[elem]){
            obj[elem].push(i)
            // console.log(elem)
        }
        else{
            obj[elem]=[i]
        }
        
    }
    if(obj[target]){
        return obj [target]
    }
    else{
        return -1
    }
}


module.exports = program