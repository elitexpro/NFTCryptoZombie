const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("ZombieOwnership", function () {
  it("Zombie", async function () {
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // await greeter.deployed();
    // expect(await greeter.greet()).to.equal("Hello, world!");

    const ZombieOwnership = await hre.ethers.getContractFactory("ZombieOwnership");
    const zombieownership = await ZombieOwnership.deploy("Hello, ZombieOwnership!");
    await zombieownership.deployed();
    
    console.log("ZombieOwnership deployed to:", zombieownership.address);

    

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
