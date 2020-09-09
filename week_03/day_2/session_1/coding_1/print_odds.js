function program(input) {
    // input
    var output="1"
    // write code here
    if(input == 0){
        output="NO"
    }
    else{
        for(var i=2;i<input;i++){
            if(i%2==1){

                output+="\n"+i
            }
        }
    }
    return(output)
   
    
        
    
    // return output

}

module.exports = program
