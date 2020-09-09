function program(input,n) {
    // input
    // write code here
    input=Number(input)
    n=Number(n)
    var sumNum=0,avgNum=0,countNum=0;
    let i=1;

    
    while(i<=input)
    {
        if(i%n==0){
            sumNum+=i
            countNum+=1
           
        }
        i++;
        
    }
    avgNum=sumNum/countNum;
    return avgNum
    

}


module.exports = program