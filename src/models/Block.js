import sha256 from 'crypto-js/sha256.js'
import UTXO from "./UTXO.js";
import UTXOPool from "./UTXOPool.js";


export const DIFFICULTY = 2

class Block {
  // 1. 完成构造函数及其参数
  constructor(blockchain,previousHash, height, data, miner) {
    this.previousHash=previousHash
    this.blockchain=blockchain
    this.height=height
    this.data=data
    this.hash=sha256(this.previousHash+this.blockchain+this.height+JSON.stringify(this.data)+this.miner).toString()
    this.utxoPool=new UTXOPool()
    this.coinbaseBeneficiary=miner
  }

  // isValid() 是用来检查区块是否合法的函数，需要完成以下内容：
  isValid() {
// 统计哈希值前缀0的个数
    let num = 0;
    for (let i = 0; i < this.hash.length; i++) {
      if (this.hash[i] === '0') {
        num++;
      } else {
        break;
      }
    }
    // 比较前缀0的个数与难度值
    return num >= DIFFICULTY;
  }

// setNonce(nonce) 是用来设置区块的 nonce 的函数，需要完成以下内容：
  setNonce(nonce) {
    this.hash=sha256(nonce+this.blockchain.name +
        this.previousHash +
        this.height +
        JSON.stringify(this.data)
    ).toString();
  }
  


}

export default Block

