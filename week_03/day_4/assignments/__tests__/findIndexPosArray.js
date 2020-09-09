const func = require('../findIndexPosArray.js')

test('test 1',() =>{
    expect(func('1 2 3 2 4 1 5 1 9 4 9 5 1'+'\n5')).toBe(6)
})

test('test 2', () => {
    expect(func('2 5 8 10 12' + '\n12')).toBe(4)
})

test('test 3', () => {
    expect(func('2 5 8 10 12' + '\n4')).toBe(-1)
})
