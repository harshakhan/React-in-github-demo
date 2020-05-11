const func = require('../subset.js')

test('test 1', () => {
    expect(func('10 9 8 0 2 20' + '\n10 9 8 0 2 3 4 5 6 7 1 3 5 6 20 2')).toBe("YES")
})

test('test 2', () => {
    expect(func('1 2 3' + '\n1 2 3')).toBe("YES")
})

test('test 3', () => {
    expect(func('1 43 11 9 55' + '\n1 43')).toBe("NO")
})

test('test 4', () => {
    expect(func('1 43 55' + '\n43 11 9 55 2')).toBe("NO")
})
