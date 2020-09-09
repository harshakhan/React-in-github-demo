const func = require('../greater_than_limit.js')

test('test 1', () => {
    expect(func('1 2 3 1 1 1 10 20 20 1' + '\n1')).toBe("2 3 10 20 20")
})

test('test 2', () => {
    expect(func('5 6 7 8 1 20 20 20 90 10' + '\n20')).toBe("90")
})

test('test 3', () => {
    expect(func('9 4 5 20 123 23 5 9' + '\n200')).toBe("EMPTY")
})