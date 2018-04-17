# type
1. rooted binary tree: has one root node, and each node has at most two children
2. complete binary tree 
    - full at every level and if last level not full, then only right children are lefted
    - perfect binary tree (special case of complete binary tree): every level is full
3. full binary tree: each node either has two children or none

# Traverse
1. DFS (Deapth First Search)
    - level order
2. BFS (Breadth First Search)
    - Pre-order (parent->left->right) 中->左->右 根节点开始
    - In-order (left->parent->right) 左->中->右 二叉搜索树从小到大排列
    - Post-order (left->right->parent) 左->右->中 最深左边节点开始
 
# Perfect Tree
 - Every level is full or empty
 
# Tree type
- Tree
    - Binary Tree
        - Binary Search Tree (Middium in the root)
            - Balanced Binary Search Tree
    - Heap 
        - Max Heap (Max in the root)
        - Min Heap (Min in the root)
    - Perfect tree
        - Every level is full or empty
    - Complete tree
        - Every level is full except the last level
        - last level added from left to right
