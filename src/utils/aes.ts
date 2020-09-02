/*
 * @Author: tiw
 * @Date: 2020-07-26 11:23:14
 * @LastEditTime: 2020-07-27 00:07:37
 * @LastEditors: Please set LastEditors
 * @Description: AES 加密解密
 */ 
const CryptoTS = require("crypto-ts");
interface PerInter {
  KEY:any;
  URLES:any;
}
const PER:PerInter = {
  KEY: CryptoTS.enc.Utf8.parse("ihaierForTodoKey"),
  URLES: {
    iv: CryptoTS.enc.Utf8.parse("ihaierForTodo_Iv"),
    mode: CryptoTS.mode.CBC,
    padding: CryptoTS.pad.PKCS7
  }
}
// 加密
export const encrypt = (value:string):string => {
  const WORD = CryptoTS.enc.Utf8.parse(value)
  const encrypted =  CryptoTS.AES.encrypt(WORD, PER.KEY, PER.URLES)
  return encrypted.toString()
}
// 解密
export const decrypt = (value:string):string => {
  const decrypted = CryptoTS.AES.decrypt(value, PER.KEY,  PER.URLES)
  const decryptedStr = decrypted.toString(CryptoTS.enc.Utf8)
  return decryptedStr
}
