// 1. 每⼀个节点代表⼀个字符
// 2. 有相同前缀的单词在树中就有公共的前缀节点，由于⼀共有26个⼩写英⽂字⺟（在这篇⽂章中，我们
// 主要讨论⼩写的英⽂字⺟查询），因此每个节点最多有26个⼦节点。
// 3. 整棵树的根节点是空的（这⾥我们设置根节点为root=0），这便于查找和插⼊，可以通过根节点快速的
// 进⼊树结构，稍后就会明⽩。
// 4. 每个节点结束的时候⽤⼀个特殊的标记来表示，这⾥我们⽤-1来表示结束，从根节点到-1所经过的所有
// 的节点对应⼀个英⽂单词。
class DictionaryTree{
    constructor(){
        this.root = 0
        this.nodes = {
        [this.root]: {}
        }
    }
    // 插⼊⼀个单词
    insert(word){
        // 从根节点开始
        let currentNode = this.root
        // 遍历单词的每个字符
        for(let i = 0; i < word.length; i++){
        let currentChar = word[i]
            // 如果当前节点没有这个字符，就添加⼀个节点
        if(!this.nodes[currentNode][currentChar]){
            this.nodes[currentNode][currentChar] = Object.keys(this.nodes).length
            this.nodes[this.nodes[currentNode][currentChar]] = {}
        }
        // 继续遍历下⼀个节点
        currentNode = this.nodes[currentNode][currentChar]
        }
        // 在最后⼀个节点添加结束标记
        this.nodes[currentNode]['-1'] = true
    }
    // 查找⼀个单词
    search(word){
        let currentNode = this.root
        // 遍历单词的每个字符
        for(let i = 0; i < word.length; i++){
        let currentChar = word[i]
            // 如果当前节点没有这个字符，就返回false
        if(!this.nodes[currentNode][currentChar]){
            return false
        }
        // 继续遍历下⼀个节点
        currentNode = this.nodes[currentNode][currentChar]
        }
        return this.nodes[currentNode]['-1']
    }
    // 查找前缀
    startsWith(prefix){
        let currentNode = this.root
        // 遍历前缀的每个字符
        for(let i = 0; i < prefix.length; i++){
            // 如果当前节点没有这个字符，就返回false
        let currentChar = prefix[i]
        if(!this.nodes[currentNode][currentChar]){
            return false
        }
        // 继续遍历下⼀个节点
        currentNode = this.nodes[currentNode][currentChar]
        }
        return true
    }
}