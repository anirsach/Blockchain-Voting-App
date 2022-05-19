import web3 from "./web3";

const address = "0xf3B4c37B955F7D9894bDc2Ec5C2b7a2F169CA733";
const abi = [{ "constant": true, "inputs": [], "name": "counter1", "outputs": [{ "name": "", "type": "int256" }], "payable": false, "stateMutability": "view", "type": "function" }, {
    "constant": true, "inputs": [], "name": "winner1",
    "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": true, "inputs": [], "name": "value", "outputs": [{ "name": "", "type": "uint256" }], "payable": false,
    "stateMutability": "view", "type": "function"
}, { "constant": true, "inputs": [], "name": "manager", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, {
    "constant": true, "inputs": [],
    "name": "cand2", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": true, "inputs": [], "name": "cand1", "outputs": [{ "name": "", "type": "address" }], "payable"
        : false, "stateMutability": "view", "type": "function"
}, { "constant": true, "inputs": [], "name": "counter2", "outputs": [{ "name": "", "type": "int256" }], "payable": false, "stateMutability": "view", "type": "function" }, {
    "constant":
        true, "inputs": [{ "name": "", "type": "address" }], "name": "voters", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": false, "inputs": [{
        "name": "choice", "type"
            : "int256"
    }], "name": "Vote", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"
}, {
    "constant": false, "inputs": [], "name": "winner", "outputs": [], "payable": true, "stateMutability": "payable", "type":
        "function"
}, { "inputs": [{ "name": "candidate1", "type": "address" }, { "name": "candidate2", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }]


export default new web3.eth.Contract(abi, address);
