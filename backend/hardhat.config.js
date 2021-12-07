require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-ganache");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.5.4",
// };

// module.exports = {
//   defaultNetwork: "ganache",
//   networks: {
//       ganache: {
//           url: "http://172.17.144.1:7545",
//           // accounts: [privateKey1, privateKey2, ...]
//       }
//   },
//   solidity: {
//       version: "0.6.12",
//   },
// };
module.exports = {
  defaultNetwork: "ganache",
  solidity: "0.5.4",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      gasLimit: 6000000000,
      defaultBalanceEther: 10,
    },
  },
};