const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const contractABI = [/* Paste ABI from artifacts JSON here */];

async function connectContract() {

  const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

  // Hardhat default private key
  const privateKey = " 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

  const wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(contractAddress, contractABI, wallet);

  return contract;
}