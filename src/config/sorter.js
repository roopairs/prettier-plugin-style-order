const sorting = require('postcss-sorting')
const createConfig = require('./factory')

module.exports = () =>
  sorting({
    'at-rule-nested-empty-line-before': true,
    'clean-empty-lines': true,
    'rule-nested-empty-line-before': true,
    'unspecified-properties-position': 'bottom',
    'comment-empty-line-before': [true, { ignore: ['after-comment'] }],
    'custom-property-empty-line-before': [true, { except: ['after-custom-property'] }],
    'properties-order': createConfig(),
  })
