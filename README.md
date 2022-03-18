# Direction.js

> A simple 2D and 3D vectors library for JavaScript

[![Generic badge](https://img.shields.io/badge/Builds-Passing-green.svg)](https://shields.io/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

Direction.js is a small JavaScript library that helps you to use Vectors in JavaScript. It comes built in with vector math (addition, subtract, multiplication, division and the dot product), and your able to get properties f the vector (equals, opposite, parallel, anti-parallel and normalize).

## Installing

To install, you can use NPM, Yarn or a CDN.

```html
<script src="https://unpkg.com/direction.js/lib/Direction.min.js"></script>
```

```shell
npm install direction.js

or

yarn add direction.js
```

## Getting Started

```javascript
// require module
const Vector = require('direction.js');

// create either a 2d or 3d vector
const vector2D = new Vector(10, 10);
const vector3D = new Vector(20, 1.2, 2);

const pos1 = new Vector(2, 2, 1);
const pos2 = new Vector(4, 4, 1)

console.log(pos1.equals(pos2)); // --> false

console.log(pos1.opposite(pos2)); // --> false

console.log(pos1.parallel(pos2)); // --> true

console.log(pos1.antiParallel(pos2)); // --> false

console.log(pos1.normalize()); // --> Vector { x: 0.6666666666666666, y: 0.6666666666666666, z: 0.3333333333333333, length: 1 }

console.log(pos1.add(pos2)); // --> Vector { x: 6, y: 6, z: 2, length: 8.717797887081348 }

console.log(pos1.subtract(pos2)); // --> Vector { x: -2, y: -2, z: 0, length: 2.8284271247461903 }

console.log(pos1.multiply(pos2)); // --> Vector { x: 8, y: 8, z: 1, length: 11.357816691600547 }

console.log(pos1.divide(pos2)); // --> Vector { x: 0.5, y: 0.5, z: 1, length: 1.224744871391589 }

console.log(pos1.dotProduct(pos2)); // --> 35.4742021358683

```

## Developing

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/sidnand/Direction.js.git
cd Direction.js/
yarn install
```

1. Clone the repo
1. cd into the new folder
1. Install the dependencies

## Versioning

I'm using [SemVer](http://semver.org/) for versioning.

## Tests

I'm using `mocha` and `chai.assert` to test. Go into `test/Direction.test.js` and add your test.

```shell
yarn test
```

## API

### .equals([new Vector()])

### .opposite([new Vector()])

### .parallel([new Vector()])

### .antiParallel([new Vector()])

### .normalize()

### .add([new Vector()])

### .subtract([new Vector()])

### .multiply([new Vector()])

### .divide([new Vector()])

### .dotProduct([new Vector()])

## Style Guide

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

I'm using [JavaScript Standard Style](https://standardjs.com).

Eslint:

```shell
yarn run lint <file>
```

<!-- TODO: Add Licensing -->

## License

Licensed under [MIT License](https://github.com/sidnand/Direction.js/blob/master/LICENSE)