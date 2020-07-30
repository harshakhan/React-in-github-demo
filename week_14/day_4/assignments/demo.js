// input="4\n1 5 7 9\n2 4 6 8"

// input=input.split("\n")
// var n=Number(input[0])
// var arr1=input[1].split(" ").map(Number)
// var arr2=input[2].split(" ").map(Number)
// var arr3=arr1.concat(arr2)
// for(var i=0;i<arr3.length-1;i++){
//   for(var j=0;j<arr3.length-i-1;j++){
//     if(arr3[j]>arr3[j+1]){
//       var temp=arr3[j]
//       arr3[j]=arr3[j+1]
//       arr3[j+1]=temp
//     }
//   }
// }
// console.log(arr3.join(" "))



//----------------------------------------------

input="3 10 5"

input=input.split(" ").map(Number)
    var n=input[0]
    var k=input[1]
    var y=input[2]
    var sum=0
    for(var i=1;i<=k;i++){
        var num=i*3
        if(num%y==0){
           
            sum=sum+num
            
        }
      }
      console.log(sum)