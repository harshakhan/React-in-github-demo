

// example 1:
// 4 pyramid

// example 2:
// 4 inverse_pyramid

// example 3:
// 4 rhombus 

// Sample Outputs:

// example 1:
// ....O....
// ...O.O...
// ..O.O.O..
// .O.O.O.O.

// example 2:
// .O.O.O.O.
// ..O.O.O..
// ...O.O...
// ....O....

// example 3:
// ....O....
// ...O.O...
// ..O.O.O..
// .O.O.O.O.
// ..O.O.O..
// ...O.O...
// ....O....

//------------------------------------------------
const getDots = num => new Array(num).fill('.').join("")

const getZeroes = num => new Array(num).fill('O').join(".")

const getPattern =(size,offset =0)=> {
    const out =[]
    for(let i =0 ; i<size-offset;i++){
        out[i] = getDots(size-i) + getZeroes(i+1)+ getDots(size-i)
    }
    return out
}
const makePyramid = size => getPattern(size).join('\n')

const makeInversePyramid = size => getPattern(size).reverse().join('\n')

const makeRhombus = size => [...getPattern(size),...getPattern(size,1).reverse()].join('\n')

const pyramid = input => {
    let [ size, type] = input.split(' ');
    size = Number(size);

    switch(type){
        case 'pyramid':
            return makePyramid(size)
        case 'inverse_pyramid':
            return makeInversePyramid(size)
        case 'rhombus':
            return makeRhombus(size)
        default:
            'invalid input'
    }
}

['4 pyramid','4 inverse_pyramid', '4 rhombus']. forEach(test => console.log(pyramid(test)+ '\n'))



