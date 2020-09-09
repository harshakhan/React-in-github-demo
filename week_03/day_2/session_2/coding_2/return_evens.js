function program(input) {
    // input
    // write code here
   input=Number(input)
   var output = '0'
   for( var i=1;i<=input;i++){
       if(i%2==0){
           output +="\n"+i
       }
   }
   if(output == 0){
       return(0)
   }
   else{
       return output
   }
    
    
     
    
   

    


}


module.exports = program