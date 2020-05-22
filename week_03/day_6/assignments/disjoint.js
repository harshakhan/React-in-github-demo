function program(input) {
    // input
    // write code here
    // return output
    input=input.split('\n')
    arr1=input[0].split(' ')
    arr2=input[1].split(' ')
    flag = "YES"
    for(i=0;i< arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if (Number(arr1[i]) === Number(arr2[j])){
                flag = "NO"
                break
                
            }
        }
    }
    // if(flag == true){
    //     console.log("Yes")
    // }
    // else{
    //     console.log("No")
    // }
    return flag
    
}

// custom test case
// program(<pass_test>)
// program('1 2 3 4' + '\n10 9 8 0')

module.exports = program

// to test your program 
// npm run test <filename.js>