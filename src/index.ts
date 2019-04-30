import BigNum from 'bignumber.js'

BigNum.config({
  ROUNDING_MODE: BigNum.ROUND_DOWN
})

const UNITS: Array<{ [key: string]: string }> = [
  {
    btc: '1',
    ltc: '1',
    doge: '1',
    dash: '1',
    nmc: '1',
    dgb: '1',
    vtc: '1',
    zec: '1',
    bch: '1',
    btg: '1',
    sat: '100000000'
  },
  {
    eth: '1',
    gwei: '1000000000',
    wei: '1000000000000000000'
  }
]

const _valueAB = (unitA: string, unitB: string) => {
  for (let item of UNITS) {
    if (!(item[unitA] && item[unitB])) continue
    return [item[unitA], item[unitB]]
  }
  return [1, 1]
}

const UnitHelper = (
  value: BigNum.Value,
  type?: string | number,
  dp?: number,
  replace: boolean = true
) => {
                      if (typeof type === 'number' || type === undefined) return new BigNum(value).toFormat(type)
  if (typeof type !== 'string') return value
  const unitA = type.slice(0, type.indexOf('_') || type.length)
  const unitB = type.slice(type.indexOf('_') + 1)
  const valueAB = _valueAB(unitA, unitB)
  let resNum: BigNum.Value = new BigNum(value).times(valueAB[1]).div(valueAB[0])
  if (typeof dp === 'number') resNum = resNum.toFormat(dp)
  if (!BigNum.isBigNumber(value) && replace) resNum = resNum.toString().replace(/(?:\.0*|(\.\d+?)0+)$/, '$1')
  return BigNum.isBigNumber(value) ? resNum : resNum.toString(10)
}

export default UnitHelper
