function program(input) {
    // input
    input=input.toLowerCase()
   
    // console.log(output)
    
    
   var count=0
   for(var i=0;i<input.length;i++){


       if(input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u" || input[i] == 1 || input[i] == 2 || input[i] == 3 || input[i] == 4 || 
          input[i] == 5 || input[i] == 6 || input[i] == 7 || input[i] == 8 || input[i] == 9){
           count+=0
       }
       else{
           count+=1
       }
   }
   return count 

}


module.exports = program