# 数字货币技术理论课实验报告

## 小组成员

- 2021131027-王晨 （组长）
- 2021131028-翁忠旭
- 2021131050-张蕊
- 2021131051-黄诗怡
- 2021131053-吕梓桐
- 2021131077-程诗杰


## 代码仓库链接



## 第一课代码

默克尔树的实现
https://github.com/OrrrGE/blockchain-in-js-workshop-2021/commit/8039e2cc082fb90009cf5ad23d422e3ba1ffe40a#diff-05fa4fb34523d79a4e144dccdd02b92e785e4023d3db51c8555b01917a454910  
整合到block.js  
https://github.com/OrrrGE/blockchain-in-js-workshop-2021/commit/8039e2cc082fb90009cf5ad23d422e3ba1ffe40a#diff-790164bb6d107a3c138e494d5b9634a9fe09a7d129317f5487c9198d2eae8275

### 代码 commint 地址




### 代码截图

![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab1.1.png)  
![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab1.2.png)  


### 主观与讨论题内容

---



## 第二课代码


### 代码 commint 地址

https://github.com/OrrrGE/blockchain-in-js-workshop-2021/commit/c1257be92aed40aa10ea6bfe7bd8ad0f73015107


### 代码截图

![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab2.1.png)  
![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab2.2.png)  
![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab2.3.png)  


### 主观与讨论题内容  
1.如果把例子里的字母扩展成字母和数字的形式，可以在每个节点上增加10个子节点，分别对应0-9的数字。  
这样，每个节点最多有36个子节点，而不是26个。在插入和查找的时候，需要判断当前字符是字母还是数字，然后选择相应的子节点。   
2.提高查询效率，可以考虑以下几个方面：  
（1）使用哈希表来存储每个节点的子节点，而不是数组。这样可以避免空间浪费和查找时间。    
（2）使用压缩字典树（trie）来减少树的高度和节点数。压缩字典树是指将没有分叉的路径合并成一个节点，例如单词"an"和"and"可以合并成一个节点"an(d)"。  

---


## 第三课代码


### 代码 commint 地址

https://github.com/OrrrGE/blockchain-in-js-workshop-2021/commit/fa54511e22b70a9e6ca438311435e807194fc1ce#diff-533b4b584c112260c48e9c6a04487f8649b82ef9e0e777a5745f24afcb7e6aa5


### 代码截图

![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab3.1.png)  
![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab3.2.png)  
![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab3.3.png)  
![image](https://github.com/OrrrGE/blockchain-in-js-workshop-2021/blob/lesson1/pic/clab3.4.png)  


### 主观与讨论题内容

1. 基于字典树，以太坊做了以下改良：  
     使用 RLP（Recursive Length Prefix）编码，简化节点存储。  
     将节点的哈希值作为键，这样可以减少存储空间并提高查找效率。  
     为了提高安全性，以太坊使用了 keccak256 作为哈希函数。  

2. MPT 想要解决的核心问题是：  
    提供一个加密安全且可验证的数据结构。  
    优化存储和传输效率。  
    便于在去中心化网络中传递状态信息。  


---
