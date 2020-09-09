function program(input,n) {
    // input
    // write code here
    input=Number(input)
    n=Number(n)
    var sumNum=0,avgNum=0,countNum=0;

    
    for(var i=1;i<=input;i++)
    {
        if(i%n==0){
            sumNum+=i
            countNum+=1
           
        }
        
    }
    avgNum=sumNum/countNum;
    return avgNum
    
}
    



module.exports = program