function program(input) {
    // input
    // write code here
    var output=""
    for(i=0;i<10;i++)
    {
        if(i == 9){
            output = output + input
        }
        else{
            output = output + input + '\n'
        }
    }

    //  return output
    return output
}
//console.log(program("jjjj"))

module.exports = program
