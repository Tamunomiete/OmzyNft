const { ethers } = require("hardhat")
async function main() {
    //  1. somehow tell the script we want to deploy OmzyNft.sol contract
    const contract = await ethers.getContractFactory("Omzycats")

    // 2.deploy it 
    const deployedContract = await contract.deploy();
    // awai contract to deploy
    await deployedContract.deployed();
    //3. print the address of the deployed contracts so we can look at it on etherscan
    console.log("NFT Contract is deployed to :", deployedContract.address);

}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });