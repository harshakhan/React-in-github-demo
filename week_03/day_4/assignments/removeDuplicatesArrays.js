function isDuplicate(arr,target){
    var flag=false;
    for(var i=0;i<arr.length;i++){
        if(arr[i]===target){
            flag= true;
            return flag
        }
    }
    return flag
}





function program(input) {
    // input
    
    // write code here
    input=input.split(' ')
    var out=[]
    for(var i=0;i<input.length;i++){
        if(!isDuplicate(out,input[i])){
            out.push(input[i])
        }
    }
    console.log(out.join(' '))
    return out.join(' ')
   
}


module.exports = program