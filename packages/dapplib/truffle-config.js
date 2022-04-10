require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember honey half kitchen sure tumble'; 
let testAccounts = [
"0x3783e96e1c94678a0832a3c1553ee479473b1299bf273e791ca2da9a0cc6dbf9",
"0xff19ce46ccc0843b2567997573f1ff0ff19e0181d62b272069c5edde4eee71a9",
"0x46325ad5593626a9bc13a209a204f52870555386fb8f859ce7430186f9f2ae58",
"0x0fb8c0b79d95ea40d1c0eb2ca8587ccd93e8e814ae2db53616056b06384ce871",
"0x11ecdd2cabd6f66a44042eee421e8ea86351a3850751a00ffbccc952f3c0e474",
"0x9790f02bec7521cc9010315badb4dacd1bafe97f22fa054fb2a958fbcf7ab6e8",
"0xc483794e532c62db83d68a35ffb6a535f13f49053df157def42a54dab5c03d92",
"0x8638fb989b7eb373f22a3752520003939aa86a0ef17f755b3bea692658c29ea9",
"0xfa3f3a4486b5095b651524dd758f49901b202b908652d2432b246821e2158f13",
"0x525d460d19e716a4d71f8ff866fab3f14df9769cdaf32377cfe17b57b5e10a1e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


