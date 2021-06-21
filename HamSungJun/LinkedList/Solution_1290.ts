function getDecimalValue (head: ListNode | null): number {
  let isOneBitOccurred = false
  let out = ''
  let temp = head
  while (temp !== null) {
    if (temp.val === 1) {
      isOneBitOccurred = true
      out += '1'
    } else if (temp.val === 0 && isOneBitOccurred) {
      out += '0'
    }
    temp = temp.next
  }
  let acc = 0
  for (let i = 0; i < out.length; i++) {
    acc += (2 ** (out.length - 1 - i)) * parseInt(out[i])
  }
  return acc
};
