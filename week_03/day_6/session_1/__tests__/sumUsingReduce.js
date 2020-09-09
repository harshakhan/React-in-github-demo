const func = require('../sumUsingReduce.js')

test('test 1', () => {
    expect(func('1 2 3 4 5')).toBe(15)
})