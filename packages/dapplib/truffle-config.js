require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain horn hunt drive foam slender'; 
let testAccounts = [
"0x26443eef867d7159087170345cb6641e066c4b6f61fd7b32b553af7159941f56",
"0x9ca65c6f7dad6f80204d1605c1813d2d9ad3879259f173c7737ad24014e6b150",
"0x045411a4febb965674f35115dbf95b7f5a25dbd7add145efcdc807463b928751",
"0x6ee2a6ac9a422e719018f6d0fdb1bec1bb5d639b614c77d512692aa802d06cc2",
"0x9c105b829317892bf0d26cce5d57b90b0a1c56c511ddddcb0eb50c1bfb965a53",
"0x494e9379a481abe310bf1fa0f4e76778e2574641f4101dab3d7e62b2fc5b3f23",
"0x7aa4ba76aad6b42a715242567114b97e999696fe12b6b8b4caea43be7a75bda2",
"0x7c5c101e5d22d3c7ce7024433dfd305904e80dc53d656e96c72f89f28d643d70",
"0x36b73eb5b54524d5b89b917e2579d2c6aa9e94c4f2343848ad8b6627c41fd732",
"0x6637278c4948ca221d9ec51b02de10dcd67154396fa8fef90d4ff789cf15d99a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

