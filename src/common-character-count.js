const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function getMap(str) {
    map = new Map();
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (map.has(element)){
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    }
    return map;
  }
  mapS1 = getMap(s1);
  mapS2 = getMap(s2);
  res = 0;
  mapS1.forEach((value,key) => {
    if (mapS2.has(key)){
      res = res + Math.min(value,mapS2.get(key))
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount
};
