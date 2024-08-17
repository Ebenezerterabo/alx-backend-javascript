import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter (amount)
  get amount () {
    return this._amount;
  }

  set amount (newAmount) {
    this._amount = newAmount;
  }

  // Getter and Setter (currency)
  get currency () {
    return this._currency;
  }

  set currency (newCurrency) {
    this._currency = newCurrency;
  }

  // Display full price method
  displayFullPrice () {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static method
  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
