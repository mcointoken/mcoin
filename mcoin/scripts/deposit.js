const MCoinToken = artifacts.require('./contracts/MCoinToken.sol');

module.exports = async function (callback)
{
    const toAddress = getParam('--to');
    const amount = getParam('--amount');

    if (!web3.utils.isAddress(toAddress))
    {
        return trap(new Error('The address is not valid!'));
    }

    if (!/^[0-9]*$/.test(amount))
    {
        return trap(new Error(`The amount is not valid! '${amount}'`));
    }

    const token = await MCoinToken.deployed();
    const coinbase = (await web3.eth.getAccounts())[0];

    console.log(`Sending ${amount} Axiers to ${toAddress}...`);

    try
    {
        const tokenReceipt = await token.transfer(toAddress, amount, {
            from: coinbase
        });

        console.log(`[Done] Transaction hash: ${tokenReceipt.tx}`);
    }
    catch (e)
    {
        return trap(e);
    }

    callback();
};

/**
 * Parse some parameter from command line.
 *
 * @param {string} key The argument key
 * @returns {string} The parsed key
 */
function getParam (key)
{
    let keyPosition = process.argv.indexOf(key);

    if (keyPosition < 0)
    {
        return trap(new Error(`The param ${key} not found!`));
    }

    const keyContents = process.argv[++keyPosition];

    if (!keyContents)
    {
        return trap(new Error(`The param ${key} is empty!`));
    }

    return keyContents;
}

/**
 * Halts the system on error.
 *
 * @param {Error} error The error
 */
function trap (error)
{
    console.error(error.message);
    process.exit(1);
}