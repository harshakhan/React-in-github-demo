function program(input) {
    var dis = 0
    var total=0
        if(input >=300)
        {
            dis=0.1 * input
        }
        else
        {
            dis=0
        }
        if (dis >100)
            {
                dis =100
            }
        total=input -dis
        var x =input+" "+dis+" "+total

    return(x)


}


module.exports = program