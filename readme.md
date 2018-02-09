# str-reduce [![Build Status](https://api.travis-ci.org/lukebro/str-reduce.svg)](https://travis-ci.org/lukebro/str-reduce)

> A dependency free way of reducing adjacent characters in a string limited by an amount.

## Install
```console
$ npm install --save str-reduce
```

## Usage
```javascript
const strReduce = require('str-reduce');

strReduce('aaabb', 2);
//=> 'aabb'

strReduce('AAaaaBBbb', 2);
//=> AAaaBBbb

strReduce('this will reduce duplicate characters', 1)
//=> 'this wil reduce duplicate characters'

strReduce('****************************', 6)
//=> '******'
```
## API

### strReduce(str, amount)

Takes in a `str` of type `string` and an `amount` of type `number`.

Returns a `string` of the reduced `str` where any same adacent characters are limited to the `amount` specificed.

## Tests

Clone the project and run `npm test` in project root.

## License

MIT © [Lukasz Brodowski](https://lukebro.com)
