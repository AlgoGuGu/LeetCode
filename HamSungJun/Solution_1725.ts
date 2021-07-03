function countGoodRectangles (rectangles: number[][]): number {
    /**
     * 1. 두 사이드의 길이중 작은 값을 선택하면서 등장한 작은 값중 최대값을 기억
     * 2. 작은 값으로 선택된 리스트를 순회하면서 원소별 등장 갯수를 확인
     * 3. 기억해둔 최대값을 Map에 조회하여 답안을 반환
     */
    let maxLen = Number.MIN_SAFE_INTEGER
    const cuts = rectangles.map(rect => {
        const maxSideLength = Math.min(rect[0], rect[1])
        maxLen = Math.max(maxLen, maxSideLength)
        return maxSideLength
    }).reduce((acc, curr) => {
        if (acc.has(curr)) {
            acc.set(curr, acc.get(curr) + 1)
        } else {
            acc.set(curr, 1)
        }
        return acc
    }, new Map())
    return cuts.get(maxLen)
};
