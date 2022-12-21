const special = require('../groups/special')
const positioning = require('../groups/positioning')
const display = require('../groups/display')
const sizing = require('../groups/sizing')
const spacing = require('../groups/spacing')
const box = require('../groups/box')
const list = require('../groups/list')
const table = require('../groups/table')
const typography = require('../groups/typography')
const background = require('../groups/background')
const border = require('../groups/border')
const outline = require('../groups/outline')
const shadow = require('../groups/shadow')
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
    ['List', list],
    ['Table', table],
    ['Typography', typography],
    ['Background', background],
    ['Border', border],
    ['Outline', outline],
    ['Shadow', shadow],
    ['Visual', visual],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([, properties]) => ({
    emptyLineBefore: true,
    properties,
  }))
