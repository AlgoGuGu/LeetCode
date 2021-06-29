interface RangeCondition {
    low: number;
    high: number;
}

function rangeSumBST (root: TreeNode | null, low: number, high: number): number {
/**
 * 1. InOrder(Left -> Root -> Right) 으로 순회한다.
 * 2. low <= val && <= hight 의 값이면 배열에 Push
 * 3. 배열에 취합된 값들을 더하여 리턴.
 */
  const l1: number[] = []
  recRangeSum(root, { low, high }, l1)
  return l1.reduce((acc, curr) => (acc += curr), 0)
};

function recRangeSum (root: TreeNode | null, { low, high }: RangeCondition, list: number[]): void {
  if (!root) return
  recRangeSum(root.left, { low, high }, list)
  const nodeValue = root.val
  if (low <= nodeValue && nodeValue <= high) {
    list.push(nodeValue)
  }

  recRangeSum(root.right, { low, high }, list)
}
