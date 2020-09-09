const func = require('../mirrorImage.js')

test('test 1', () => {
    expect(func('AyzB')).toBe("ZbaY")
})

test('test 2', () => {
    expect(func('DCBA')).toBe("WXYZ")
})

test('test 3', () => {
    expect(func('aabbccxxyyzz')).toBe("zzyyxxccbbaa")
})
