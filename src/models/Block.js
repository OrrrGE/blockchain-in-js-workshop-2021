import sha256 from 'crypto-js/sha256.js';
import MerkleTree from "./MerkleTree.js";
import UTXOPool from "./UTXOPool.js";


export const DIFFICULTY = 2;

class Block {
  transactions = [];
  constructor(blockchain, previousHash, height, data, miner) {
    this.previousHash = previousHash;
    this.blockchain = blockchain;
    this.height = height;
    this.merkleTree = new MerkleTree(data);
    this.hash = this.calculateHash(miner);
    this.coinbaseBeneficiary = miner;
    this.utxoPool = new UTXOPool(this.coinbaseBeneficiary);

  }

  calculateHash(miner) {
    return sha256(
        this.previousHash +
        this.blockchain +
        this.height +
        this.merkleTree.getRoot() +
        miner
    ).toString();
  }

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


  setNonce(nonce) {
    this.hash = sha256(
        nonce +
        this.blockchain.name +
        this.previousHash +
        this.height +
        this.merkleTree.getRoot()
    ).toString();

  }
  // 根据交易变化更新区块 hash
  _setHash() {
    this.hash = this.calculateHash(this.coinbaseBeneficiary);
  }

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash() {
    this.merkleTree.buildTree(this.transactions);
    return this.merkleTree.getRoot();
  }

  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction(transaction) {
    //验证交易合法性
    if (this.utxoPool.isValidTransaction(transaction)) {
      //添加交易
      this.transactions.push(transaction);
      //更新 UTXOPool
      this.utxoPool.handleTransaction(transaction);
    }
    //更新 hash
    this._setHash();
  }


}

export default Block;