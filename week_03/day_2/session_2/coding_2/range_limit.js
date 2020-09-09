function program(input) {
    // input
    // write code here
    input=input.split(" ")
    // console.log(input)
    var firstnum = Number(input[0])
   
    for (var i=Number(input[0]+1); i< Number(input[1]); i++){
        firstnum +="\n"+i
        // console.log(firstnum)
    }
     console.log(firstnum)
    // return(firstnum)
}


module.exports = program