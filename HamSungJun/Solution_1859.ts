function sortSentence (s: string): string {
/**
 * 끝자리 숫자를 기준으로 정렬
 * 조인하여 반환된 문자열에서 정규식 매칭을 통해
 * 숫자를 전부 제거하면 정렬된 문자열만 남아 반환됨.
 */
  const sArr = s.split(' ')
  sArr.sort((a, b) => {
    const rankA = +a[a.length - 1]
    const rankB = +b[b.length - 1]
    return Number(rankA > rankB) - Number(rankA < rankB)
  })
  return sArr.join(' ').replace(/\d/g, '')
};
