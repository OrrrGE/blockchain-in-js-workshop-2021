import sha256 from 'crypto-js/sha256.js';


class MerkleTree {
    constructor(data) {
        this.tree = this.buildTree(data);
    }

    // 构建树
    buildTree(data) {
        if (data.length === 0) {
            return [];
        }
        let tree = [];

        // 对叶节点哈希
        for (let i = 0; i < data.length; i++) {
            tree.push(sha256(data[i]).toString());
        }

        // 从叶节点开始构建树，直到剩下一个根节点
        while (tree.length > 1) {
            let temp = [];
            for (let i = 0; i < tree.length; i += 2) {
                let left = tree[i];
                let right = i + 1 < tree.length ? tree[i + 1] : '';
                let combined = sha256(left + right).toString();
                temp.push(combined);
            }

            tree = temp;
        }
        //覆盖原来的树
        this.tree = tree;
        return tree;
    }

    // 获取根节点
    getRoot() {
        if (this.tree.length === 0) {
            return null;
        }
        return this.tree[0];
    }

}

export default MerkleTree;