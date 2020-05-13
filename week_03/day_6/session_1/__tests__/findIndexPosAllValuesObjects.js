const func = require('../findIndexPosAllValuesObjects.js')

test('test 1', () => {
    expect(func('1 2 3 2 5')).toEqual( { '1': [ 0 ], '2': [ 1, 3 ], '3': [ 2 ] , '5': [ 4 ] } )
})
test('test 2', () => {
    expect(func('1 1 1 1 1')).toEqual( { '1': [ 0, 1, 2, 3, 4 ]} )
})
test('test 3', () => {
    expect(func('2 4 2 12 2')).toEqual( { '2': [ 0, 2, 4 ], '4': [ 1 ], '12': [ 3 ] } )
})
