/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function(t) {
  const answer = recTreeToStr(t);
  return answer.slice(1, answer.length - 1);
};

const isInternalNode = (treeNode) => treeNode.left || treeNode.right;

const recTreeToStr = (treeNode) => {
  if (!treeNode) return '';
  let out = '(';
  if (treeNode) {
    out += treeNode.val;
  }
  if (isInternalNode(treeNode)) {
    if (!treeNode.left) {
      out += '()' + (recTreeToStr(treeNode.right));
    } else if (treeNode.left && treeNode.right) {
      out += (recTreeToStr(treeNode.left)) + (recTreeToStr(treeNode.right));
    } else if (!treeNode.right) {
      out += (recTreeToStr(treeNode.left));
    }
  }
  out += ')';
  return out;
};


