const Vector = require('./../lib/Direction')
const assert = require('chai').assert;

describe('Direction.js', () => {
  describe('#equals()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(10, 10);
      let vect2 = new Vector(10, 10);
      let result = vect1.equals(vect2);

      assert.equal(result, true);
    })

    it('Should return false', () => {
      let vect1 = new Vector(10, 10);
      let vect2 = new Vector(11, 10);
      let result = vect1.equals(vect2);

      assert.equal(result, false);
    })
  })

  describe('#opposite()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(-10, 10);
      let vect2 = new Vector(10, -10);
      let result = vect1.opposite(vect2);

      assert.equal(result, true);
    })

    it('Should return true', () => {
      let vect1 = new Vector(50, 10);
      let vect2 = new Vector(-50, -10);
      let result = vect1.opposite(vect2);

      assert.equal(result, true);
    })

    it('Should return false', () => {
      let vect1 = new Vector(50, 10);
      let vect2 = new Vector(-51, -10);
      let result = vect1.opposite(vect2);

      assert.equal(result, false);
    })

    it('Should return false', () => {
      let vect1 = new Vector(50, -10);
      let vect2 = new Vector(-50, -10);
      let result = vect1.opposite(vect2);

      assert.equal(result, false);
    })

    it('Should return false', () => {
      let vect1 = new Vector(-50, -10);
      let vect2 = new Vector(-50, 11);
      let result = vect1.opposite(vect2);

      assert.equal(result, false);
    })
  })

  describe('#parallel()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(-11, 10, -11);
      let vect2 = new Vector(-22, 9, -1);
      let result = vect1.parallel(vect2);

      assert.equal(result, true);
    })

    it('Should return false', () => {
      let vect1 = new Vector(-11, 10, -10);
      let vect2 = new Vector(-22, -9, -10);
      let result = vect1.parallel(vect2);

      assert.equal(result, false);
    })
  })

  describe('#antiParallel()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(11, -10, -11);
      let vect2 = new Vector(-22, 9, 1);
      let result = vect1.antiParallel(vect2);

      assert.equal(result, true);
    })

    it('Should return false', () => {
      let vect1 = new Vector(-11, 10, -10);
      let vect2 = new Vector(-22, -9, -10);
      let result = vect1.antiParallel(vect2);

      assert.equal(result, false);
    })
  })

  describe('#Vector.length', () => {
    it('Should return true', () => {
      let vect1 = new Vector(3, 1, 2);
      let result = vect1.length;

      assert.equal(result, Math.sqrt(9 + 1 + 4));
    })
  })

  describe('#add()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(2, 2, 2);
      let vect2 = new Vector(1, 1, 1);
      let result = vect1.add(vect2);

      assert.equal(result.x, 3);
      assert.equal(result.y, 3);
      assert.equal(result.z, 3);
    })
  })

  describe('#subtract()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(2, 2, 2);
      let vect2 = new Vector(1, 1, 1);
      let result = vect1.subtract(vect2);

      assert.equal(result.x, 1);
      assert.equal(result.y, 1);
      assert.equal(result.z, 1);
    })
  })

  describe('#multiply()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(2, 2, 2);
      let vect2 = new Vector(2, 3, 4);
      let result = vect1.multiply(vect2);

      assert.equal(result.x, 4);
      assert.equal(result.y, 6);
      assert.equal(result.z, 8);
    })
  })

  describe('#divide()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(2, 2, 2);
      let vect2 = new Vector(1, 1, 1);
      let result = vect1.multiply(vect2);

      assert.equal(result.x, 2);
      assert.equal(result.y, 2);
      assert.equal(result.z, 2);
    })
  })

  describe('#dotProduct()', () => {
    it('Should return true', () => {
      let vect1 = new Vector(2, 2, 2);
      let vect2 = new Vector(1, 1, 1);
      let result = vect1.dotProduct(vect2);

      let addVect = vect1.add(vect2);
      let cosTheta = (addVect.x + addVect.y + addVect.x) / (vect1.length + vect2.length);
      let total = vect1.length * vect2.length * cosTheta;

      assert.equal(result, total);
    })
  })
})