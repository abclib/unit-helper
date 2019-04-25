## unit-converter

<div>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/abcKeyCOM/unit-converter">
    <img src="https://david-dm.org/abcKeyCOM/unit-converter.svg"
    alt="Dependency Status" />
  </a>

  <!-- devDependency Status -->
  <a href="https://david-dm.org/abcKeyCOM/unit-converter#info=devDependencies">
    <img src="https://david-dm.org/abcKeyCOM/unit-converter/dev-status.svg" alt="devDependency Status" />
  </a>

  <!-- Build Status -->
  <a href="https://travis-ci.org/abcKeyCOM/unit-converter">
    <img src="https://travis-ci.org/abcKeyCOM/unit-converter.svg"
    alt="Build Status" />
  </a>

  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/@abckey/unit-converter">
    <img src="https://img.shields.io/npm/v/@abckey/unit-converter.svg"
    alt="NPM version" />
  </a>

  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/@abckey/unit-converter">
    <img src="https://coveralls.io/repos/github/@abckey/unit-converter/badge.svg" alt="Test Coverage" />
  </a>

</div>

<br />

A Blockchain Encrypted Digital Currency Converter.

## Install

```
npm i @abckey/unit-converter
```

## Usage

```js
import UnitConverter from '@abckey/unit-converter'

UnitConverter('9876543210.9876543210') // '9,876,543,210.987654321'
UnitConverter('9876543210.9876543210', 0) // '9,876,543,210'
UnitConverter('9876543210.9876543210', 2) // '9,876,543,210.98'
UnitConverter('9876543210123456789', 'wei_gwei', 7) // '9,876,543,210.1234567'
UnitConverter('9876543210123000000', 'wei_gwei', 7) // '9,876,543,210.123'
UnitConverter('9876543210123000000', 'wei_gwei', 7, false) // '9,876,543,210.1230000'
UnitConverter(1, 'btc_sat') // '100000000'
UnitConverter('1000000000000000000', 'wei_eth') // 1

```
