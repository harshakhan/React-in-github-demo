function program(input) {
    // input
    input=input.toLowerCase()
   
    // console.log(output)
    
    
   var consants=0
   for(var i=0;i<input.length;i++){


       if(input[i] !== "a" || input[i] !== "e" || input[i] !== "i" || input[i] !== "o" || input[i] !== "u" || input[i] !== " "){
           consants++
       }
   }
   return consants  

}


module.exports = program