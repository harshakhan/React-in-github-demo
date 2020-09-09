function program(input) {
    // input
    // write code here
    input=input.split('')
    var vowl_list="aeiouAEIOU"
    var count=0
    for (var i=0;i<input.length;i++){
        if(vowl_list.indexOf(input[i])!==-1){
            count+=1
        }
    }
    return count

}


module.exports = program