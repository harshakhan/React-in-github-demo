function program(input) {
    // input
    // write code here
    //  return output

    var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //var address = document.getElementById[email].value;
    if (reg.test(input) == false) 
    {
        // console.log('Invalid Email Address');
        return ("NO");
    }
    else{
        return("YES")
    }

}


module.exports = program