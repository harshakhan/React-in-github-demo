const func = require('../stringPlay.js')

test('test 1', () => {
    expect(func('MASAI  school' + '\ncamelCase')).toBe("masaiSchool")
})

test('test 2', () => {
    expect(func('Masai    SCHOOL' + '\nsnake_case')).toBe("masai_school")
})

test('test 3', () => {
    expect(func('a b B a k s    K  s S S' + '\nhyphen-case')).toBe("a-b-b-a-k-s-k-s-s-s")
})

test('test 4', () => {
    expect(func('MASAI SCHOOL BANGALORE' + '\ncamelCase')).toBe("masaiSchoolBangalore")
})

test('test 5', () => {
    expect(func('NAME' + '\ncamelCase')).toBe("name")
})