export default class Building {
  constructor (sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter and Setter (sqft)
  get sqft () {
    return this._sqft;
  }

  set sqft (newSqft) {
    this._sqft = newSqft;
  }
}
