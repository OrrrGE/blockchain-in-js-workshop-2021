import sha256 from 'crypto-js/sha256.js'
import {verifySignature} from "../crypto.js";

class Transaction {

//添加手续费
  constructor(from, to, amount,fee,signature) {
    this.from = from
    this.to = to
    this.amount = amount
    this.fee = fee
    this.signature = signature
    this.hash = this._calculateHash()
  }


  // 计算交易 hash 的摘要函数
  _calculateHash() {
    return sha256(this.from + this.to + this.fee + this.amount).toString()

  }

  // 更新交易 hash
  _setHash() {
    this.hash = this._calculateHash()

  }


  // 校验交易签名 返回 bool 类型的值
  hasValidSignature() {
    // 交易没有签名的情况
    if (!this.signature) {
      return false
    }
    // 交易有签名的情况
    return verifySignature(this.hash, this.signature, this.from)
  }




}

export default Transaction
