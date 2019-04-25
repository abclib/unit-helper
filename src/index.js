import BN from 'bignumber.js'

BN.config({
  ROUNDING_MODE: BN.ROUND_DOWN
})

const UNITS = [
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

const MSG = {
  101: '101: Type invalid!',
  102: '102: Unsupported unit!',
  103: '103: Unit error!'
}

const UnitConverter = (number, type = null, dp = null, replace = true) => {
  if (typeof type === 'number' || type === null) {
    dp = type
    return BN(number).toFormat(dp)
  }
  if (typeof type === 'string') type = type.split('_')
  else throw new Error(MSG[101])
  if (type.length !== 2) throw new Error(MSG[102])
  const unitA = type[0]
  const unitB = type[1]
  let units = null
  for (let item of UNITS) {
    if (!(item[unitA] && item[unitB])) continue
    units = item
    break
  }
  if (units === null) throw new Error(MSG[103])
  let resNum = BN(number).times(units[unitB]).div(units[unitA])
  if (typeof dp === 'number') resNum = resNum.toFormat(dp)
  if (!BN.isBigNumber(number) && replace) resNum = resNum.toString().replace(/(?:\.0*|(\.\d+?)0+)$/, '$1')
  return BN.isBigNumber(number) ? resNum : resNum.toString(10)
}

export default UnitConverter
