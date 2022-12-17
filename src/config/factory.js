const special = require('../groups/special')
const positioning = require('../groups/positioning')
const boxModel = require('../groups/boxModel')
const typography = require('../groups/typography')
const visual = require('../groups/visual')
const animation = require('../groups/animation')
const misc = require('../groups/misc')

module.exports = () =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Box Model', boxModel],
    ['Typography', typography],
    ['Visual', visual],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([, properties]) => ({
    emptyLineBefore: true,
    properties,
  }))
