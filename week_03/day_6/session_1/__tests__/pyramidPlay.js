const func = require('../pyramidPlay.js')

test('test 1', () => {
    expect(func('4 pyramid')).toBe("....O...."+
        "\n...O.O..."+
        "\n..O.O.O.."+
        "\n.O.O.O.O.")
})

test('test 2', () => {
    expect(func('4 inverse_pyramid')).toBe(".O.O.O.O."+
        "\n..O.O.O.."+
        "\n...O.O..."+
        "\n....O....")
})

test('test 3', () => {
    expect(func('4 rhombus')).toBe("....O...."+
    "\n...O.O..."+
    "\n..O.O.O.."+
    "\n.O.O.O.O."+
    "\n..O.O.O.."+
    "\n...O.O..."+
    "\n....O....")
})

test('test 4', () => {
    expect(func('3 inverse_pyramid')).toBe(".O.O.O."+
    "\n..O.O.."+
    "\n...O...")
})

test('test 5', () => {
    expect(func('3 rhombus')).toBe("...O..."+
    "\n..O.O.."+
    "\n.O.O.O."+
    "\n..O.O.."+
    "\n...O...")
})


