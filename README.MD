[![Build Status](https://travis-ci.org/gitbaron/whatvanity.svg?branch=dev)](https://travis-ci.org/gitbaron/whatvanity)
[![codecov](https://codecov.io/gh/gitbaron/whatvanity/branch/dev/graph/badge.svg)](https://codecov.io/gh/gitbaron/whatvanity)


# whatvanity
A very simple program to convert a vanity phone number to numeric value.

It strips off any non alpha-numeric characters, and replaces the alphabets to numbers as below.

| letter | replaced to number |
| ------ | :-----------------:|
| a,b,c,A,B,C | 2 |
| d,e,f,D,E,F | 3 |
| g,h,i,G,H,I | 4 |
| j,k,l,J,K,L | 5 |
| m,n,o,M,N,O | 6 |
| p,q,r,s,P,Q,R,S | 7 |
| t,u,v,T,U,V | 8 |
| w,x,y,z,W,X,Y,Z | 9 |

## Installation

```bash
  npm install whatvanity --save
```

## Tests

```bash
  npm test
```

## Usage

```javascript
  var vanityToNum = require('whatvanity');
  var vanityPhNum = '1800TESTING';
  var numericPhNum = vanityToNum(vanityPhNum);
```

## Release History

* 2.1.0 Added code coverage via codecov.io
* 2.0.0 Updated logic, added ci via Travis-CI.org
* 1.0.0 Initial Release

## License

This code has been released under the [UNLICENSE][].

[UNLICENSE]:LICENSE
