const { BN } = require('openzeppelin-test-helpers');
const { ALL_TAXES } = require('./constants');

/**
 * Apply the token takes to given value.
 *
 * @param {BN} value Transaction value
 * @param {BN} taxDecimals Tax number shift
 * @param {BN} taxAmount The tax amount
 */
function applyTax (value, taxDecimals = 0, taxAmount = ALL_TAXES)
{
    const normalizedTaxAmount = new BN(100).mul(new BN(10 ** taxDecimals));
    const temp = value.mul(taxAmount);

    return temp.div(normalizedTaxAmount);
}

module.exports = {
    applyTax
};