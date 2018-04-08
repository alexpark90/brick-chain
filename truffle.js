
module.exports = {
  migrations_directory: './migrations',
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
    // rinkeby: {
    //   // provider: function() {
    //   //   return new HDWalletProvider('https://rinkeby.infura.io/Ky8NToGaN1kNETNXMDhn')
    //   // },
    //   host: 'https://rinkeby.infura.io/Ky8NToGaN1kNETNXMDhn',
    //   network_id: 4
    // }
  }
}
