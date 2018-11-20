/* eslint-disable no-console */

const got = require('got');

const url = 'https://api.magpie.im';

class Magpie {
  constructor (secret_key, publishable_key) {
    this.secret_key = Buffer.from(secret_key.concat(':')).toString('base64');
    this.publishable_key = Buffer.from(publishable_key.concat(':')).toString('base64');
  }
  async test (body) {
    const body = {
      card: {
        name: 'Juan de la Cruz',
        number: '4242424242424242',
        exp_month: 10,
        exp_year: 2021,
        cvc: '923'
      }
    };
    const result = await got(url);
  }
  static get TestCards () {
    /**
     * - Test values for expiry date should be in the future.
     * - Use any 3 digits for CVC values.
     */
    return {
      VISA: '4111111111111111',
      MASTERCARD: '5555555555554444',
      AMEX: '378282246310005',
      DISCOVER: '6011111111111117'
    }
  }
}

const client = new Magpie('sk_test_KNpijheSxrsWeayMvcT3Vg', 'pk_test_SLi4CXQ1hoSrhtFqtlsINA');
console.log(Magpie.TestCards);
console.log({ client });
