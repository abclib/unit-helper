import BigNum from 'bignumber.js'
import UnitConverter from '../src/index'

test(`('9876543210.9876543210') => '9,876,543,210.987654321'`, () => {
  const res = UnitConverter('9876543210.9876543210')
  expect(res).toBe('9,876,543,210.987654321')
})

test(`('9876543210.9876543210', 0) => '9,876,543,210'`, () => {
  const res = UnitConverter('9876543210.9876543210', 0)
  expect(res).toBe('9,876,543,210')
})

test(`('9876543210.9876543210', undefined) => '9,876,543,210.98'`, () => {
  const res = UnitConverter('9876543210.9876543210', undefined)
  expect(res).toBe('9,876,543,210.987654321')
})

test(`('9876543210.9876543210', 2) => '9,876,543,210.98'`, () => {
  const res = UnitConverter('9876543210.9876543210', 2)
  expect(res).toBe('9,876,543,210.98')
})

test(`('9876543210.9876543210', 'invalid', 7) => '9,876,543,210,123,456,789'`, () => {
  const res = UnitConverter('9876543210123456789', 'invalid', 7)
  expect(res).toBe('9,876,543,210,123,456,789')
})

test(`('9876543210.9876543210', 'btc', 7) => '9,876,543,210,123,456,789'`, () => {
  const res = UnitConverter('9876543210123456789', 'btc', 7)
  expect(res).toBe('9,876,543,210,123,456,789')
})

test(`('9876543210.9876543210', 'btc_eth', 7) => '9,876,543,210,123,456,789'`, () => {
  const res = UnitConverter('9876543210123456789', 'btc', 7)
  expect(res).toBe('9,876,543,210,123,456,789')
})

test(`('9876543210.9876543210', 'wei_gwei', 7) => '9,876,543,210.1234567'`, () => {
  const res = UnitConverter('9876543210123456789', 'wei_gwei', 7)
  expect(res).toBe('9,876,543,210.1234567')
})

test(`('9876543210100000000', 'wei_gwei', 7) => '9,876,543,210.1'`, () => {
  const res = UnitConverter('9876543210100000000', 'wei_gwei', 7)
  expect(res).toBe('9,876,543,210.1')
})

test(`('9876543210123000000', 'wei_gwei', 7) => '9,876,543,210.1230000'`, () => {
  const res = UnitConverter('9876543210123000000', 'wei_gwei', 7, false)
  expect(res).toBe('9,876,543,210.1230000')
})

test(`(1, 'btc_sat') => '100000000'`, () => {
  const res = UnitConverter(1, 'btc_sat')
  expect(res).toBe('100000000')
})

test(`('1000000000000000000', 'wei_eth') => '1'`, () => {
  const res = UnitConverter('1000000000000000000', 'wei_eth')
  expect(res).toBe('1')
})

test(`(new BigNum(1), 'btc_sat') => new BigNum('100000000')`, () => {
  const btc = new BigNum(1)
  const sat = new BigNum('100000000')
  const res = UnitConverter(btc, 'btc_sat')
  expect(res).toEqual(sat)
})
