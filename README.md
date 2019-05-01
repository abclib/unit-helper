## unit-helper

<div>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/abcKeyCOM/unit-helper">
    <img src="https://david-dm.org/abcKeyCOM/unit-helper.svg"
    alt="Dependency Status" />
  </a>

  <!-- devDependency Status -->
  <a href="https://david-dm.org/abcKeyCOM/unit-helper#info=devDependencies">
    <img src="https://david-dm.org/abcKeyCOM/unit-helper/dev-status.svg" alt="devDependency Status" />
  </a>

  <!-- Build Status -->
  <a href="https://travis-ci.org/abcKeyCOM/unit-helper">
    <img src="https://travis-ci.org/abcKeyCOM/unit-helper.svg"
    alt="Build Status" />
  </a>

  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/@abckey/unit-helper">
    <img src="https://img.shields.io/npm/v/@abckey/unit-helper.svg"
    alt="NPM version" />
  </a>

  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/@abckey/unit-helper">
    <img src="https://coveralls.io/repos/github/@abckey/unit-helper/badge.svg" alt="Test Coverage" />
  </a>
</div>

<br />

A Blockchain Encrypted Digital Currency Unit Converter.

## Install

```
npm i @abckey/unit-helper
```

## Usage

```js
import UnitHelper from '@abckey/unit-helper'

UnitHelper('9876543210.9876543210')                     // '9,876,543,210.987654321'
UnitHelper('9876543210.9876543210', 2)                  // '9,876,543,210.98'
UnitHelper('9876543210.9876543210', 0)                  // '9,876,543,210'
UnitHelper('9876543210123456789', 'wei_gwei', 7)        // '9,876,543,210.1234567'
UnitHelper('9876543210123000000', 'wei_gwei', 7)        // '9,876,543,210.123'
UnitHelper('9876543210123000000', 'wei_gwei', 7, false) // '9,876,543,210.1230000'
UnitHelper(1, 'btc_sat')                                // '100000000'
UnitHelper('100000000', 'sat_doge')                     // '1'
UnitHelper('1000000000000000000', 'wei_eth')            // '1'

```


## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FabcKeyCOM%2Funit-helper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FabcKeyCOM%2Funit-helper?ref=badge_large)
