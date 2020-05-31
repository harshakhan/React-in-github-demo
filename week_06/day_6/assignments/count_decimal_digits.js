var input='34.788'

input=input.split('')

for(var i=0 ; i<input.length ; i++){
    if(input[i]=='.'){
        console.log(Math.abs((i+1)-input.length))
    }
}