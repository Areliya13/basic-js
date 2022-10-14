const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str === ''){
      return '';
  }
  let curSymbol = str[0];
  let count = 1;
  let res = '';

  for (let i = 1; i < str.length; i++) {
      const element = str[i];
      if (element === curSymbol) {
          count++;
      } else {
          if (count === 1){
              res = `${res}${curSymbol}`
          } else {
              res = `${res}${count}${curSymbol}`
          }
          curSymbol = element;
          count = 1;
      }
  }
  
  if (count === 1){
      res = `${res}${curSymbol}`
  } else {
      res = `${res}${count}${curSymbol}`
  }
  return res;
}

module.exports = {
  encodeLine
};
