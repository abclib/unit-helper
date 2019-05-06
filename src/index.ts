import BigNumber from 'bignumber.js';

class UnitHelper extends BigNumber {
  constructor(
    value: BigNumber.Value,
    type: string = 'null'
  ) {
    if (typeof value === 'string') value = value.replace(/,/g, '')
    super(value)
    const unitA = type.slice(0, type.indexOf('_') || type.length)
    const unitB = type.slice(type.indexOf('_') + 1)
    const valueAB = this.valueAB(unitA, unitB)
    super(this.times(valueAB[1]).div(valueAB[0]))
  }

  static UNITS_MAP: Array<{ [key: string]: string }> = [
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

  private valueAB(unitA: string, unitB: string): string[] {
    for (let item of UnitHelper.UNITS_MAP) {
      if (!(item[unitA] && item[unitB])) continue
      return [item[unitA], item[unitB]]
    }
    return ['1', '1']
  }

  format(dp?: number, rm: BigNumber.RoundingMode = BigNumber.ROUND_DOWN): string {
    if (dp === undefined) return this.toFormat()
    else return this.dp(dp, rm).toFormat()
  }
}

const _UnitHelper = (value: BigNumber.Value, type?: string) => new UnitHelper(value, type)

export default _UnitHelper
