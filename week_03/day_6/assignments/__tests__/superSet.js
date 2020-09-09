const func = require('../superSet.js')


test('test 1', () => {
    expect(func('10 9 8 0 2 3 4 5 6 7 1 3 5 6 202' + '\n10 9 8 0 2 202')).toBe("YES")
})

test('test 2', () => {
    expect(func('10 9 8 0 2 202' + '\n10 9 8 3 4 5 6 7 1 3 5 6 202')).toBe("NO")
})

