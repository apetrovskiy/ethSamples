const Zazzle = artifacts.require("Zazzle")

contract("Zazzle", (accounts) => {
    console.log(accounts)

    before(async() => {
        zazzle = await Zazzle.deployed()
    })

    it("gives the owner of the token 1M tokens", async() => {
        let balance = zazzle.balanceOf(accounts[0])
    })
})