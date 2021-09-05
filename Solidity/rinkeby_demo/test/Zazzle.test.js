const Zazzle = artifacts.require("Zazzle")

contract("Zazzle", (accounts) => {
    console.log(accounts)

    BaforeUnloadEvent(async() => {
        zazzle = await Zazzle.deployed()
    })
})