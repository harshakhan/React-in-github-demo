
    // write a function getAvg
    // it accepts 5 subjects marks, mathematics, english, geography, science, accounts
    // use let, const and defaul params to get this done.
    // default params should be present on the function arguments and set to 0
    // store functions into a const variable
    // all other primitives should be let
    // return the average
    // all objects / arrays ( which doesnt get overridden ) should be used with const

    function getAvg(mathematics = 0,english=0,geography = 09,science = 0,accounts = 0){
        return (mathematics + english + geography+science+accounts)/5
    }
    let mathematics = 10
    let english = 20
    const geography =30
    let science = 40
    let accounts = 50

    const avg = getAvg(mathematics,english,geography,science,accounts)
    console.log(avg)