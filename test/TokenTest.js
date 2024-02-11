const Token = artifacts.require("Token");

contract("Token", accounts => {
    it("should deploy and mint initial supply correctly", async () => {
        const tokenInstance = await Token.deployed();
        const totalSupply = await tokenInstance.totalSupply();
        assert.equal(totalSupply, 1000000, "Total supply is incorrect");
    });

    it("should transfer tokens correctly", async () => {
        const tokenInstance = await Token.deployed();
        await tokenInstance.transfer(accounts[1], 100);
        const balance = await tokenInstance.balanceOf(accounts[1]);
        assert.equal(balance, 100, "Transfer did not occur correctly");
    });
});
