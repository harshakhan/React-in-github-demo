const func = require('../findCountDuplicatesObjects.js')

test('test 1',() =>{
    expect(func('1 2 3 1 1 1 10 20 20 1'+'\n1')).toBe(5)
})

test('test 2', () => {
    expect(func('5 6 7 8 1 20 20 20 90 10' + '\n20')).toBe(3)
})

test('test 3', () => {
    expect(func('5 6 7 8 1 20 20 20 90 10' + '\n50')).toBe(-1)
})