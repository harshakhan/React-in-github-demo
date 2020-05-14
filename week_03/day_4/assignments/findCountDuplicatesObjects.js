function program(input) {
    // input
    // write code here
    //  return output
    input=input.split('\n')
    var target = Number(input[1])
    input = input[0].split(' ')
    var count =0
    var obj ={}
    for(var i =0; i<input.length; i++){
        var elem = input[i]
        if(!(obj[elem])){
            obj[elem]=1
        }
        else if (obj[elem]){
            obj[elem]+= 1

        }
        
        
    }
    if(obj[target]){
        return (obj[target])
    }
    else{
        return -1
    }
}


module.exports = program