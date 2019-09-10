import test from 'ava'

import UnitHelper from '../dist/index'

test(`('9876543210.9876543210').format()              => '9,876,543,210.987654321'`, t => {
  const res = UnitHelper('9876543210.9876543210', 'invalid').format()
  t.is(res, '9,876,543,210.987654321')
})

test(`('9876543210.9876543210', 'invalid').format()   => '9,876,543,210.987654321'`, t => {
  const res = UnitHelper('9876543210.9876543210', 'invalid').format()
  t.is(res, '9,876,543,210.987654321')
})

test(`('9876543210.9876543210', 'btc_gwei').format()  => '9,876,543,210.987654321'`, t => {
  const res = UnitHelper('9876543210.9876543210', 'btc').format()
  t.is(res, '9,876,543,210.987654321')
})

test(`('987654321098765432109', 'wei_gwei').format(7) => '987,654,321,098.7654321'`, t => {
  const res = UnitHelper('987654321098765432109', 'wei_gwei').format(7)
  t.is(res, '987,654,321,098.7654321')
})

test(`('9,876,543,210,987,654', 'wei_gwei').format(7) => '9,876,543.2109876'`, t => {
  const res = UnitHelper('9,876,543,210,987,654', 'wei_gwei').format(7)
  t.is(res, '9,876,543.2109876')
})

test(`('987654321012345000000', 'wei_gwei').format(7) => '987,654,321,012.345'`, t => {
  const res = UnitHelper('987654321012345000000', 'wei_gwei').format(7)
  t.is(res, '987,654,321,012.345')
})

test(`('987654321012345000000', 'wei_gwei').toFormat(7) => '987,654,321,012.3450000'`, t => {
  const res = UnitHelper('987654321012345000000', 'wei_gwei').toFormat(7)
  t.is(res, '987,654,321,012.3450000')
})

test(`(1, 'btc_sat').toStringt =>  '100000000'`, t => {
  const res = UnitHelper(1, 'btc_sat').toString()
  t.is(res, '100000000')
})

test(`(1, 'btc_sat').toString(16) => '5f5e100'`, t => {
  const res = UnitHelper(1, 'btc_sat').toString(16)
  t.is(res, '5f5e100')
})

test(`('1000000000000000000', 'wei_eth').toNumbert =>  1`, t => {
  const res = UnitHelper('1000000000000000000', 'wei_eth').toNumber()
  t.is(res, 1)
})
