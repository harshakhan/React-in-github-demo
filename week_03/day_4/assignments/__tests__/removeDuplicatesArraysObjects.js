const func = require('../removeDuplicatesArraysObjects.js')

test('test 1',() =>{
    expect(func('1 2 1 3 2 4 1')).toBe('1 2 3 4')
})


test('test 2',() =>{
    expect(func('1 1 1 1 1 1 1 1 2')).toBe('1 2')
})


test('test 3',() =>{
    expect(func('100 20 30 9 30 5 30 5 100 2')).toBe('2 5 9 20 30 100')
})
