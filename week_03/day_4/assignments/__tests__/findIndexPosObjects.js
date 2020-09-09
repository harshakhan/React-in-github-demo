const func = require('../findIndexPosObjects.js')
test('test 1',() =>{
    expect(func('1 2 3 2 4 1 5 1 9 4 9 5 1'+'\n5')).toEqual([6, 11])
})
test('test 2', () => {
    expect(func('2 5 8 10 12' + '\n12')).toEqual([4])
})
test('test 3', () => {
    expect(func('2 5 8 10 12' + '\n4')).toBe(-1)
})