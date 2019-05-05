import BigNum from 'bignumber.js'
import UnitHelper from '../src/index'

test(`('9876543210.9876543210') => '9,876,543,210.987654321'`, () => {
  const res = UnitHelper('9876543210.9876543210')
  expect(res).toEqual(new BigNum('9876543210.9876543210'))
})

test(`('9876543210.1000000000', 'invalid').dpFormat() => '9,876,543,210.1'`, () => {
  const res = UnitHelper('9876543210.1000000000', 'invalid').dpFormat()
  expect(res).toBe('9,876,543,210.1')
})

test(`('9876543210.9876543210', 'btc').dpFormat() => '9,876,543,210.987654321'`, () => {
  const res = UnitHelper('9876543210.9876543210', 'btc').dpFormat()
  expect(res).toBe('9,876,543,210.987654321')
})

test(`('9876543210.9876543210', 'btc_eth').dpFormat() => '9,876,543,210.987654321'`, () => {
  const res = UnitHelper('9876543210.9876543210', 'btc_eth').dpFormat()
  expect(res).toBe('9,876,543,210.987654321')
})

test(`('987654321098765432100', 'wei_gwei').dpFormat(7) => '9,876,543,210.1234567'`, () => {
  const res = UnitHelper('9876543210123456789', 'wei_gwei').dpFormat(7)
  expect(res).toBe('9,876,543,210.1234567')
})

test(`('9,876,543,210,123,456', 'wei_gwei').dpFormat(7) => '9,876,543.2101234'`, () => {
  const res = UnitHelper('9,876,543,210,123,456', 'wei_gwei').dpFormat(7)
  expect(res).toBe('9,876,543.2101234')
})

test(`('987654321010000000000', 'wei_gwei').dpFormat(7) => '987,654,321,012.3'`, () => {
  const res = UnitHelper('987654321012300000000', 'wei_gwei').dpFormat(7)
  expect(res).toBe('987,654,321,012.3')
})

test(`('987654321012345000000', 'wei_gwei').dpFormat(7) => '987,654,321,012.3450000'`, () => {
  const res = UnitHelper('987654321012345000000', 'wei_gwei').toFormat(7)
  expect(res).toBe('987,654,321,012.3450000')
})

test(`(1, 'btc_sat').toString() => '100000000'`, () => {
  const res = UnitHelper(1, 'btc_sat').toString()
  expect(res).toBe('100000000')
})

test(`(1, 'btc_sat').toString(16) => '5f5e100'`, () => {
  const res = UnitHelper(1, 'btc_sat').toString(16)
  expect(res).toBe('5f5e100')
})

test(`('1000000000000000000', 'wei_eth').toNumber() => 1`, () => {
  const res = UnitHelper('1000000000000000000', 'wei_eth').toNumber()
  expect(res).toBe(1)
})
