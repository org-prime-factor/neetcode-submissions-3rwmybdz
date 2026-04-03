/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        int rootIdx = 0;
        return traverseAndBuildTree(preorder, inorder, 0, preorder.size() - 1,
                                    rootIdx);
    }

    TreeNode* traverseAndBuildTree(vector<int>& preorder, vector<int>& inorder,
                                   int startIdx, int endIdx, int& rootIdx) {
        if (startIdx > endIdx)
            return nullptr;
        TreeNode* root = new TreeNode(preorder[rootIdx]);
        int i = startIdx;
        for (; i < endIdx; i++) {
            if (inorder[i] == root->val) {
                break;
            }
        }
        rootIdx++;
        root->left =
            traverseAndBuildTree(preorder, inorder, startIdx, i - 1, rootIdx);
        root->right =
            traverseAndBuildTree(preorder, inorder, i + 1, endIdx, rootIdx);
        return root;
    }
};