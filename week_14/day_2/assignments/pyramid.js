

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

const getZeros = num => new Array(num).fill('O').join(".")

console.log( getDots(3)+getZeros(1)+getDots(3))
console.log( getDots(2)+getZeros(2)+getDots(2))
console.log( getDots(1)+getZeros(3)+getDots(1))
const makePyramid = size =>{

}

const makeInversePyramid = size => {

}

const makeRhombus = size => {

}

const pyramid = input => {
    const[ size, type] = input.split(' ');
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

// ['4 pyramid','4 inverse_pyramid', '4 rhombus']. forEach(test => console.log(pyramid(test)))



