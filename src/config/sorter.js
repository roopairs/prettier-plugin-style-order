const sorting = require('postcss-sorting')
const createConfig = require('./factory')

module.exports = () =>
  sorting({
    'at-rule-nested-empty-line-before': true,
    'clean-empty-lines': true,
    'rule-nested-empty-line-before': true,
    'unspecified-properties-position': 'bottom',
    'properties-order': createConfig(),
  })
