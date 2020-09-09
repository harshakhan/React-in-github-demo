var input="5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n1 9 8 3 4 2 5 6 7\n8 5 9 7 6 1 4 2 3\n4 2 6 8 5 3 7 9 1\n7 1 3 9 2 4 8 5 6\n9 6 1 5 3 7 2 8 4\n2 8 7 4 1 9 6 3 5\n3 4 5 2 8 6 1 7 9"

input=input.split('\n')
var arr =[]
for (var a=0;a<input.length;a++){
    arr[a] = (input[a]).split(' ').map(Number)
}
console.log(arr)

var final_sum =0
for(var i=0;i<9;i++){
    var sum_row =0
    var mat_row =[]
    for(var j=0;j<9;j++){
        sum_row +=arr[i][j]
    }
    mat_row.push(sum_row)
    // console.log(mat_row)
}
// console.log('-----------above are row------------------')

for(var i=0 ;i<9;i++){
    var sum_col=0
    var mat_col=[]
    for(var j=0;j<9;j++){
        sum_col+=arr[j][i]
    }
    mat_col.push(sum_col)
    // console.log(mat_col)
}
// console.log('---------above are column---------------')

var sum_box1 =0
var mat_box1=[]
for(var i=0; i<3;i++){
    for(var j=0;j<3;j++){
        sum_box1+=arr[i][j]
    }

    
}
mat_box1.push(sum_box1)
// console.log(mat_box1)
// console.log("------------above box1----------------")

var sum_box2=0
var mat_box2=[]
for(var i=0;i<3;i++){
    for(var j=3;j<6;j++){
        sum_box2+=arr[i][j]
    }
}

mat_box2.push(sum_box2)
// console.log(mat_box2)
// console.log("-------------above box2-------------")


var sum_box3=0
var mat_box3=[]

for(var i=0;i<3;i++){
    for(var j=6;j<9;j++){
        sum_box3 += arr[i][j]
    }
}
mat_box3.push(sum_box3)
// console.log(mat_box3)
// console.log("----------------above box3-------------")



var sum_box4=0
var mat_box4=[]

for(var i=3;i<6;i++){
    for(var j=0;j<3;j++){
        sum_box4 += arr[i][j]
    }
}
mat_box4.push(sum_box4)
// console.log(mat_box4)
// console.log("----------------above box4-------------")




var sum_box5=0
var mat_box5=[]

for(var i=3;i<6;i++){
    for(var j=3;j<6;j++){
        sum_box5 += arr[i][j]
    }
}
mat_box5.push(sum_box5)
// console.log(mat_box3)
// console.log("----------------above box5-------------")




var sum_box6=0
var mat_box6=[]

for(var i=3;i<6;i++){
    for(var j=6;j<9;j++){
        sum_box6 += arr[i][j]
    }
}
mat_box6.push(sum_box6)
// console.log(mat_box3)
// console.log("----------------above box6-------------")



var sum_box7=0
var mat_box7=[]

for(var i=6;i<9;i++){
    for(var j=0;j<3;j++){
        sum_box7 += arr[i][j]
    }
}
mat_box7.push(sum_box7)
// console.log(mat_box3)
// console.log("----------------above box7-------------")




var sum_box8=0
var mat_box8=[]

for(var i=6;i<9;i++){
    for(var j=3;j<6;j++){
        sum_box8 += arr[i][j]
    }
}
mat_box8.push(sum_box8)
// console.log(mat_box3)
// console.log("----------------above box8-------------")




var sum_box9=0
var mat_box9=[]

for(var i=6;i<9;i++){
    for(var j=6;j<9;j++){
        sum_box9 += arr[i][j]
    }
}
mat_box9.push(sum_box9)
// console.log(mat_box3)
// console.log("----------------above box9-------------")



if(mat_box1==45 && mat_box2==45 && mat_box3==45 && mat_box4==45 && mat_box5==45 && mat_box6==45 && mat_box7==45 && mat_box8==45 && mat_box9==45){
    console.log('CORRECT')
}
else{
    console.log('WRONG')
}
