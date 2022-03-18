/**
 * Class to create a vector
 *
 * @export
 * @class Vector
 */

module.exports = class Vector {
  /**
   * Creates an instance of Vector.
   *
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  constructor(x, y, z) {
    this.x = x || 0; // X value
    this.y = y || 0; // Y Value
    this.z = z || 0; // Z Value
    this.length = Math.sqrt((x * x) + (y * y) + (z * z)); // Length (magnitude) of the vector
  }
  /**
   * Checks to see if 2 vectors are equal
   *
   * new Vector() === new Vector()
   *
   * @param {object} otherVector
   * @returns boolean
   *
   * Whether equals or not
   */
  equals(otherVector) {
    if (otherVector.x === this.x &&
      otherVector.y === this.y &&
      otherVector.z === this.z) {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * Checks to see if 2 vectors are opposite to one another
   *
   * Vectors have the same magnitude but different directions
   *
   * @param {object} otherVector
   * @returns boolean
   *
   * Whether opposite or not
   */
  opposite(otherVector) {
    if (otherVector.x === -this.x &&
      otherVector.y === -this.y &&
      otherVector.z === -this.z) {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * Checks to see if 2 vectors are parallel to one another
   *
   * Different magnitudes(length) but same signs
   *
   * @param {object} otherVector
   *
   * @returns boolean
   *
   * Whether parellel or not
   */
  parallel(otherVector) {
    if (Math.sign(otherVector.x) === Math.sign(this.x) &&
      Math.sign(otherVector.y) === Math.sign(this.y) &&
      Math.sign(otherVector.z) === Math.sign(this.z)) {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * Checks to see if 2 vectors are anti-parallel to each other
   *
   * Different magnitudes (lengths), but opposite sides
   *
   * @param {object} otherVector
   * @returns boolean
   *
   * Whether anti-parellel or not
   */
  antiParallel(otherVector) {
    if (Math.sign(otherVector.x) !== Math.sign(this.x) &&
      Math.sign(otherVector.y) !== Math.sign(this.y) &&
      Math.sign(otherVector.z) !== Math.sign(this.z)) {
      return true;
    }
    else {
      return false;
    }
  }
  /**
   * Normalizes a vector
   *
   * Vector whose values are between -1 and 1
   *
   * @returns new Vector Object
   *
   * Formula:
   * let a = vector
   * a / |a|
   */
  normalize() {
    if (this.length !== 0) {
      return new Vector((this.x / this.length), (this.y / this.length), (this.z / this.length));
    }
    else {
      throw new Error('Vectors length is 0');
    }
  }
  /**
   * Adds to vectors together
   *
   * @param {object} otherVector
   * @returns new Vector object
   */
  add(otherVector) {
    return new Vector(otherVector.x + this.x, otherVector.y + this.y, otherVector.z + this.z);
  }
  /**
   * Subtracts to vectors together
   *
   * @param {object} otherVector
   * @returns new Vector object
   */
  subtract(otherVector) {
    return new Vector(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z);
  }
  /**
   * Multiplies 2 vectors together
   *
   * @param {object} otherVector
   * @returns new Vector object
   */
  multiply(otherVector) {
    return new Vector(otherVector.x * this.x, otherVector.y * this.y, otherVector.z * this.z);
  }
  /**
   * Divides 2 vectors together
   *
   * @param {object} otherVector
   * @returns new Vector object
   */
  divide(otherVector) {
    if (otherVector.x !== 0 && otherVector.y !== 0 && otherVector.z !== 0) {
      return new Vector(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z);
    }
    else {
      throw new Error("Can't divide by 0");
    }
  }
  /**
   * Finds the dot product between 2 vectors
   *
   * Takes 2 vectors and returns 1 number (scalar)
   *
   * @param {objects} otherVector
   * @returns Number
   *
   * The dot product
   *
   * Formula:
   * a * b is used to repersent the dot product
   * let a = vector 1
   * let b = vector 2
   *
   * a * b = |a| × |b| × cos(θ)
   *
   * cos(θ) = angle between 2 vectors
   */
  dotProduct(otherVector) {
    let addVect = this.add(otherVector);
    // cos(θ) = (a + b) / (|a| + |b|)
    let cosTheta = (addVect.x + addVect.y + addVect.x) / (this.length + otherVector.length);
    return this.length * otherVector.length * cosTheta;
  }
}