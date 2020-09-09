function program(input, n) {
    // input
    // var n=Number
    var output=input
    if (n==0){
        return "";

    }
    else{
        for(i=1; i<n; i++){
            output+="\n"+input
        }

    }
    return(output)

}


module.exports = program