function program(input) {
    // input
    // write code here
    // return output
    input=input.split('\n')
    num1=input[1].split(' ')
    num2= input[0].split(' ')
    var count =0;
    for(var i=0; i<num2.length;i++){
        for (var j=0;j<num1.length;j++){
            if(Number(num1[i])===Number(num2[j])){
                count += 1
            }
        }
    }
    if(count<=num1.length && num2.length>num1.length){
        return("YES")
    }
    else{
        return ('NO')
    }
}


module.exports = program