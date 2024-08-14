export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Implementing the symbol.toPrimitive method
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'string':
        return this._location;
      case 'number':
        return this._size;
      default:
    }
  }
}
