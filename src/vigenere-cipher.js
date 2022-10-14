const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(isDirect){
    console.log(isDirect);
    if (isDirect == undefined){
      this.isDirect = true;
    } else {
      this.isDirect = isDirect;
    }
  }

  encrypt(str, keystr) {
      if (typeof(str) !== 'string'){
          throw new Error('Incorrect arguments!');
      }
      if (typeof(keystr) !== 'string'){
          throw new Error('Incorrect arguments!');
      }

      const codeA = 'A'.charCodeAt(0);
      const upperString = str.toUpperCase();
      const upperKey = keystr.toUpperCase();

      const strArr = [];
      const keyArr = [];
      
      for (let i = 0; i < upperString.length; i++) {
          strArr.push(upperString.charCodeAt(i) - codeA);
      }

      for (let i = 0; i < upperKey.length; i++) {
          keyArr.push(upperKey.charCodeAt(i) - codeA);
      }

      let iter = 0;
      const len = keyArr.length;
      const resArr = []

      for (let i = 0; i < strArr.length; i++) {
          const element = strArr[i];
          if ((element >= 0) && (element < 26)){
              resArr.push((element + keyArr[iter]) % 26);
              iter = (iter + 1) % len;
          } else {
              resArr.push(element);
          }
      }

      const res = resArr.reduce((acc, el) => {
          if (this.isDirect) {
              return `${acc}${String.fromCharCode(el + codeA)}`;
          } else {
              return `${String.fromCharCode(el + codeA)}${acc}`;
          }
      }, '')

      return res;
  }

  decrypt(str, keystr) {
      if (typeof(str) !== 'string'){
          throw new Error('Incorrect arguments!');
      }
      if (typeof(keystr) !== 'string'){
          throw new Error('Incorrect arguments!');
      }

      const codeA = 'A'.charCodeAt(0);
      const upperString = str.toUpperCase();
      const upperKey = keystr.toUpperCase();

      const strArr = [];
      const keyArr = [];
      
      for (let i = 0; i < upperString.length; i++) {
          strArr.push(upperString.charCodeAt(i) - codeA);
      }

      for (let i = 0; i < upperKey.length; i++) {
          keyArr.push(upperKey.charCodeAt(i) - codeA);
      }

      let iter = 0;
      const len = keyArr.length;
      const resArr = []

      for (let i = 0; i < strArr.length; i++) {
          const element = strArr[i];
          if ((element >= 0) && (element < 26)){
              resArr.push((26 + element - keyArr[iter]) % 26);
              iter = (iter + 1) % len;
          } else {
              resArr.push(element);
          }
      }

      const res = resArr.reduce((acc, el) => {
          if (this.isDirect) {
              return `${acc}${String.fromCharCode(el + codeA)}`;
          } else {
              return `${String.fromCharCode(el + codeA)}${acc}`;
          }
      }, '')

      return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
