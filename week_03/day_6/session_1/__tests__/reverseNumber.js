const func = require('../reverseNumber.js')

test('test 1', () => {
    expect(func(500)).toBe(5)
})

test('test 2', () => {
    expect(func(1221)).toBe(1221)
})

test('test 3', () => {
    expect(func(45321)).toBe(12354)
})