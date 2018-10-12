const { method } = require('./unit.js')

describe('#method test', () => {
  test('test suit works', () => {
    expect(method()).toEqual(true)
  })
})
