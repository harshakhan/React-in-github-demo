function program(input) {
    // input
    var output=input
    // write code here
    for(var i=input-1;i>=0;i--){
        output += "\n"+i;
        console.log(output)
    }
    if (input==0){
        output='0'
    }
    // return output
    return(output)

}


module.exports = program