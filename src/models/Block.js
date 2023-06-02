import sha256 from 'crypto-js/sha256.js';
import MerkleTree from "./MerkleTree.js";
import UTXO from "./UTXO.js";
import UTXOPool from "./UTXOPool.js";

export const DIFFICULTY = 2;

class Block {
  constructor(blockchain, previousHash, height, data, miner) {
    this.previousHash = previousHash;
    this.blockchain = blockchain;
    this.height = height;
    this.merkleTree = new MerkleTree(data);
    this.hash = this.calculateHash(miner);
    this.utxoPool = new UTXOPool();
    this.coinbaseBeneficiary = miner;
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

}

export default Block;