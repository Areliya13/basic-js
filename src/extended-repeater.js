const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let mainStr = str
  let addStr = ''
  if ('addition' in options){
    addStr = options.addition
    let addSep
    'additionSeparator' in options ? addSep = options.additionSeparator : addSep = '|'
    let addRepT
    'additionRepeatTimes' in options ? addRepT = options.additionRepeatTimes : addRepT = 0    
    for (let i = 1; i < addRepT; i++) {
      addStr = `${addStr}${addSep}${options.addition}`
    }
    mainStr = `${mainStr}${addStr}`
  }
  let sep
  'separator' in options ? sep = options.separator : sep = '+'
  let repT
  'repeatTimes' in options ? repT = options.repeatTimes : repT = 0    
  let res = mainStr
  for (let i = 1; i < repT; i++) {
    res = `${res}${sep}${mainStr}`
  }
  return res
}

module.exports = {
  repeater
};
