const func = require('../disjoint.js')

test('test 1', () => {
    expect(func('1 2 3 4' + '\n10 9 8 0')).toBe("YES")
})

test('test 2', () => {
    expect(func('2 5 7 9' + '\n1 4 2 7')).toBe("NO")
})

test('test 3', () => {
    expect(func('1 2 3 4' + '\n1 5 6 7')).toBe("NO")
})

