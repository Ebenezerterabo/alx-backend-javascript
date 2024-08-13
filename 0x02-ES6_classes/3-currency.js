export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter method (code)
  get code() {
    return this._code;
  }

  // Setter method (code)
  set code(newCode) {
    this._code = newCode;
  }

  // Getter method (name)
  get name() {
    return this._name;
  }

  // Setter method (name)
  set name(newName) {
    this._name = newName;
  }

  // Display full currency method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
