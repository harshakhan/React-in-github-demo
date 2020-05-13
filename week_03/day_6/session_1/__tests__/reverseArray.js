const func = require('../reverseArray.js')

test('test 1', () => {
    expect(func('1 2 5 3')).toEqual([3,5,2,1])
})

test('test 2', () => {
    expect(func('5 2 1 0')).toEqual([0,1,2,5])
})

test('test 3', () => {
    expect(func('1 2 3')).toEqual([3,2,1])
})