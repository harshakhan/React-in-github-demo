function program(input) {
    var sum=0
    var x=input.split(" ")
    for(var i=0; i<=x.length;i++){
        if(x[i]%2==0){
            sum +=Number(x[i])
        }
    }
    return sum
   

   }


   







module.exports = program