function commonChars (A: string[]): string[] {
  /*
     * 문자열 배열에서 공통으로 등장하는 알파벳을 확인한다.
     * 1. 배열내부의 모든 문자열을 순회한다.
     * 2. 하나의 문자열마다 하나의 Map을 선언한다.
     * 3. 문자열의 모든 문자를 순회하면서 Map에 카운트를 증가시킨다.
     * 4. 문자를 카운트한 맵끼리 비교하면서 문자가 일치하고 갯수까지 일치하는지 확인한다.
     * 5. 확인한 문자와 갯수를 배열에 담아 리턴한다.
     */
  if (A.length === 1) return A[0].split('')
  const mapArray:Map<string, number>[] = []
  A.forEach(str => {
    const alphaCountMap = new Map()
    for (let i = 0; i < str.length; i++) {
      const nextChar = str[i]
      if (alphaCountMap.has(nextChar)) {
        alphaCountMap.set(nextChar, alphaCountMap.get(nextChar) + 1)
      } else {
        alphaCountMap.set(nextChar, 1)
      }
    }
    mapArray.push(alphaCountMap)
  })

  const compareAlphaMap = mapArray[0]
  let out = ''
  for (const [char, count] of compareAlphaMap) {
    let isHasAll = true
    let repeatCount = count
    for (let i = 1; i < mapArray.length; i++) {
      const nextAlphaMap = mapArray[i]
      if (!nextAlphaMap.has(char)) {
        isHasAll = false
        continue
      } else {
        repeatCount = Math.min(repeatCount, nextAlphaMap.get(char) as number)
      }
    }
    if (isHasAll) {
      out += (char.repeat(repeatCount))
    }
  }
  return out.split('')
};

console.log(commonChars(['cool', 'lock', 'cook']))
