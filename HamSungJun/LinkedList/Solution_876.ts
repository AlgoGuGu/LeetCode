/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode (head: ListNode | null): ListNode | null {
  let lenList = 1
  let temp = head
  while (temp.next !== null) {
    temp = temp.next
    lenList += 1
  }

  temp = head
  const mid = (lenList % 2 !== 0) ? Math.ceil(lenList / 2) : (lenList / 2) + 1
  let count = 1
  while (count < mid) {
    temp = temp.next
    count += 1
  }
  return temp
};
