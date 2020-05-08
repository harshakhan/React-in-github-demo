function program(input,char) {
    // input, char
    // write code here
    var arr =[];
    var tmp="";
    for( var i=0;i<input.length;i++){
        if(input[i]===char){
            arr[arr.length]=tmp;
            tmp=''
        }
        else{
            tmp+=input[i]
        }
        if(i===input.length-1){
            arr[arr.length]=tmp
        }
    }
    
    return arr


}


module.exports = program