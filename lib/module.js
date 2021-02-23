const path = require('path')

function viaCepModule () {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'viacep.js'
  })
}

module.exports = viaCepModule
module.exports.meta = require('../package.json')
