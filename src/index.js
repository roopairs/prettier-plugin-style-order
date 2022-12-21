const prettier = require('prettier/parser-postcss')
const postcss = require('postcss')
const postcssScss = require('postcss-scss')
const postcssLess = require('postcss-less')
const sorting = require('./config/sorter')

const syntaxes = {
  css: postcss,
  scss: postcssScss,
  less: postcssLess,
}

function getParser(lang) {
  const prettierParser = prettier.parsers[lang]

  const parser = {
    ...prettierParser,
    preprocess: (text, options) =>
      postcss({
        plugins: [sorting()],
      }).process(text, { syntax: syntaxes[lang] }).css,
  }

  return parser
}

exports.parsers = {
  css: getParser('css'),
  scss: getParser('scss'),
  less: getParser('less'),
}
