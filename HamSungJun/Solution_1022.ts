function sumRootToLeaf (root: TreeNode | null): number {
  const basket: string[] = []
  traversal(root, basket, '')
  return basket.reduce((acc, curr) => (acc += binToDec(curr)), 0)
};

function traversal (node: TreeNode | null, basket: string[], out: string): void {
  if (!node.left && !node.right) {
    basket.push(out + node.val)
  } else {
    if (node.left) {
      traversal(node.left, basket, out + node.val)
    }
    if (node.right) {
      traversal(node.right, basket, out + node.val)
    }
  }
}

function binToDec (bin: string): number {
  return parseInt(bin, 2)
}
