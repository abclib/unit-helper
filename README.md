## unit-helper
[![NPM version](https://img.shields.io/npm/v/@abckey/unit-helper.svg)](https://www.npmjs.com/package/@abckey/unit-helper)

A Blockchain Encrypted Digital Currency Unit Converter.

## Install

```
npm i @abckey/unit-helper
```

## Usage

```js
import UnitHelper from '@abckey/unit-helper'

UnitHelper('9876543210.9876543210').dpFormat()            // '9,876,543,210.987654321'
UnitHelper('9876543210.9876543210').dpFormat(2)           // '9,876,543,210.98'
UnitHelper('9876543210.9876543210').dpFormat(0)           // '9,876,543,210'
UnitHelper('9876543210123456789', 'wei_gwei').dpFormat(7) // '9,876,543,210.1234567'
UnitHelper('9876543210123000000', 'wei_gwei').dpFormat(7) // '9,876,543,210.123'
UnitHelper('9876543210123000000', 'wei_gwei').toFormat(7) // '9,876,543,210.1230000'
UnitHelper(1, 'btc_sat').toString()                       // '100000000'
UnitHelper(1, 'btc_sat').toString(16)                     // '5f5e100'
UnitHelper('100000000', 'sat_doge').toNumber()            // 1
```


## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FabcKeyCOM%2Funit-helper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FabcKeyCOM%2Funit-helper?ref=badge_large)
