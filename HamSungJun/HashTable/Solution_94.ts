/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal (root: TreeNode | null): number[] {
  const result:number[] = []
  recInorderTraversal(root, result)
  return result
};

function recInorderTraversal (node: TreeNode| null, result: number[]): void {
  // LEFT -> ROOT -> RIGHT
  if (node) {
    recInorderTraversal(node.left, result)
    result.push(node.val)
    recInorderTraversal(node.right, result)
  }
}

function recPreorderTraversal (node: TreeNode| null, result: number[]): void {
  // ROOT -> LEFT -> RIGHT
  if (node) {
    result.push(node.val)
    recInorderTraversal(node.left, result)
    recInorderTraversal(node.right, result)
  }
}

function recPostorderTraversal (node: TreeNode| null, result: number[]): void {
  // LEFT -> RIGHT -> ROOT
  if (node) {
    recInorderTraversal(node.left, result)
    recInorderTraversal(node.right, result)
    result.push(node.val)
  }
}
