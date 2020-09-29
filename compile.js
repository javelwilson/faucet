const path = require('path')
const fs = require('fs')
const solc = require('solc')

const faucetPath = path.resolve(__dirname, "contracts", "Faucet.sol")
const faucetSource = fs.readFileSync(faucetPath, 'utf8')

module.exports = solc.compile(faucetSource, 1).contracts[':Faucet']