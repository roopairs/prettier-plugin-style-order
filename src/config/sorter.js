const postcss = require('postcss')
const sorting = require('postcss-sorting')
const createConfig = require('./factory')

module.exports = (value, opts = {}) => {
  return postcss({
    plugins: [
      sorting({
        'at-rule-nested-empty-line-before': true,
        'clean-empty-lines': true,
        'rule-nested-empty-line-before': [true, { except: ['after-rule'] }],
        'unspecified-properties-position': 'bottom',
        'properties-order': createConfig(),
      }),
    ],
  }).process(value, { from: undefined }).css
}
