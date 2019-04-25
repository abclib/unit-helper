import BN from 'bignumber.js'
import UnitConverter from '../src/index'

test('[Format] ', () => {
  const res = UnitConverter('9876543210.9876543210')
  expect(res).toBe('9,876,543,210.987654321')
})

test('[Format] dp = 0', () => {
  const res = UnitConverter('9876543210.9876543210', 0)
  expect(res).toBe('9,876,543,210')
})

test('[Format] dp = 2', () => {
  const res = UnitConverter('9876543210.9876543210', 2)
  expect(res).toBe('9,876,543,210.98')
})

test(`[Format] type = wei_gwei`, () => {
  const res = UnitConverter('9876543210123456789', 'wei_gwei', 7)
  expect(res).toEqual('9,876,543,210.1234567')
})

test(`[Format] type = wei_gwei`, () => {
  const res = UnitConverter('9876543210100000000', 'wei_gwei', 7)
  expect(res).toEqual('9,876,543,210.1')
})

test(`[Format] type = wei_gwei`, () => {
  const res = UnitConverter('9876543210123000000', 'wei_gwei', 7, false)
  expect(res).toEqual('9,876,543,210.1230000')
})

test('[btc_sat] 1 btc = 100000000 sat', () => {
  const res = UnitConverter(1, 'btc_sat')
  expect(res).toBe('100000000')
})

test('[wei_eth] 1000000000000000000 wei = 1 eth', () => {
  const res = UnitConverter('1000000000000000000', 'wei_eth')
  expect(res).toBe('1')
})

test(`[btc_sat] bignumber`, () => {
  const btc = BN(1)
  const sat = BN('100000000')
  const res = UnitConverter(btc, 'btc_sat')
  expect(res).toEqual(sat)
})

test('[error] 101: Type invalid!', () => {
  let res = null
  try {
    res = UnitConverter('1', {})
  } catch (error) {
    res = error.message.replace(/[^\d]/g, '')
  }
  expect(res).toBe('101')
})

test('[error] 102: Unsupported unit!', () => {
  let res = null
  try {
    res = UnitConverter('1', 'btc')
  } catch (error) {
    res = error.message.replace(/[^\d]/g, '')
  }
  expect(res).toBe('102')
})

test('[error] 103: Unit error!', () => {
  let res = null
  try {
    res = UnitConverter('1', 'btc_eth')
  } catch (error) {
    res = error.message.replace(/[^\d]/g, '')
  }
  expect(res).toBe('103')
})
