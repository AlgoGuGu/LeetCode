function restoreString (s: string, indices: number[]): string {
  const strArray: string[] = new Array(s.length)
  for (let i = 0; i < indices.length; i++) {
    const nextIdx = indices[i]
    strArray[nextIdx] = s[i]
  }
  return strArray.join('')
};
