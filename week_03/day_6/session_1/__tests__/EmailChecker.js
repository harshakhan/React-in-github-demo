const func = require('../EmailChecker.js')

test('test 1', () => {
    expect(func('admin@masaischool.com')).toBe("YES")
})

test('test 2', () => {
    expect(func('my.nameis@masaischool.org')).toBe("YES")
})

test('test 3', () => {
    expect(func('mysite@masai.school.net')).toBe("YES")
})

test('test 4', () => {
    expect(func('masai.school.com')).toBe("NO")
})

test('test 5', () => {
    expect(func('masai@.com')).toBe("NO")
})

test('test 6', () => {
    expect(func('@masai.school.net')).toBe("NO")
})

test('test 7', () => {
    expect(func('albert@gmail.b')).toBe("NO")
})

test('test 8', () => {
    expect(func('blue@.org.org')).toBe("NO")
})

test('test 9', () => {
    expect(func('.masaischool@masaischool.org')).toBe("NO")
})

test('test 10', () => {
    expect(func('masai()*@gmail.com')).toBe("NO")
})

test('test 11', () => {
    expect(func('naomi..1234@yahoo.com')).toBe("NO")
})

