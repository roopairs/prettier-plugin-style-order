const special = require('../groups/special')
const positioning = require('../groups/positioning')
const display = require('../groups/display')
const sizing = require('../groups/sizing')
const spacing = require('../groups/spacing')
const box = require('../groups/box')
const typography = require('../groups/typography')
const visual = require('../groups/visual')
const animation = require('../groups/animation')
const misc = require('../groups/misc')

module.exports = () =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Display', display],
    ['Sizing', sizing],
    ['Spacing', spacing],
    ['Box', box],
    ['Typography', typography],
    ['Visual', visual],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([, properties]) => ({
    emptyLineBefore: true,
    properties,
  }))
