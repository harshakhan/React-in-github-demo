function program(input) {
    // input
    // write code here
    //return output
    var out=""
    for(var i=0;i<input.length;i++){
        out += mirror2(input[i])
    }
    return(out)
}
function mirror2(char){
    var lower=('abcdefghijklmnopqrstuvwxyz')
    var upper=('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    revUpper=('ZYXWVUTSRQPONMLKJIHGFEDCBA')
    revLower=('zyxwvutsrqponmlkjihgfedcba')
    for(var i=0; i<lower.length;i++){
        if(lower[i]===char){
            return(revLower[i])


        }
        else if(upper[i]===char){
            return(revUpper[i])
        }
    }
    return(char)
}


module.exports = program