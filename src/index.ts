import BigNum from 'bignumber.js'

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

const _valueAB = (unitA: string, unitB: string): string[] => {
  for (let item of UNITS) {
    if (!(item[unitA] && item[unitB])) continue
    return [item[unitA], item[unitB]]
  }
  return ['1', '1']
}

const UnitHelper = (
  value: BigNum.Value,
  type?: string
) => {
  if (typeof value === 'string') value = value.replace(/,/g, '')
  let _this: any = new BigNum(value)
  if (type === undefined) return _this
  const unitA = type.slice(0, type.indexOf('_') || type.length)
  const unitB = type.slice(type.indexOf('_') + 1)
  const valueAB = _valueAB(unitA, unitB)
  _this = _this.times(valueAB[1]).div(valueAB[0])
  _this.dpFormat = (dp?: number, rm: number = BigNum.ROUND_DOWN) => {
    if (dp === undefined) return _this.toFormat()
    else return _this.dp(dp, rm).toFormat()
  }
  return _this
}

export default UnitHelper
