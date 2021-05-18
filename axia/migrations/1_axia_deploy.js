const MCoinToken = artifacts.require('./MCoinToken.sol');

module.exports = async (deployer) =>
{
    /**
     * Tax recipient wallet
     */
    const TAX_RECIPIENT_ADDR = '0x8546DB1D9913e24F722e6401b080d90a87493c2b';

    /**
     * Deploy the MCOIN Token Contract
     */
    await deployer.deploy(
        MCoinToken,
        TAX_RECIPIENT_ADDR
    );
};