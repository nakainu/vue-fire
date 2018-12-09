'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const localEnv = require('./local.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FIREBASE: localEnv["FIREBASE"],
})
