const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const provider = ganache.provider()
const web3 = new Web3(provider)
const { interface, bytecode } = require('../compile')

let accounts
let faucet

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()

    faucet = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: []})
        .send({ from: accounts[0], gas: '100000'})
})

describe('Faucet', () => {
    it('deploys a contract', () => {
        assert.ok(faucet.options.address)
    })
})