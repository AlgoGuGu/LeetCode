function replaceDigits (s: string): string {
    /**
     * 1. 클로저 내부 캐쉬용도로 사용할 Map 자료구조 배치.
     * 2. shift 연산이 많아질 수록 캐쉬에 등록해둔 결과 값이 많아지므로
     * 3. 이후 인풋의 크기가 커질 수록 성능상에서 유리해질 수 있을것이라 생각함.
     */
    const cachedConverter = cachedFn()
    let out = ''
    for (let i = 0; i < s.length; i++) {
        const nextCharCode = s[i].charCodeAt(0)
        if (nextCharCode >= 48 && nextCharCode <= 57) {
            out += cachedConverter(s[i - 1], +s[i])
        } else {
            out += s[i]
        }
    }
    return out
};

function cachedFn () {
    const cacheMap: Map<string, string> = new Map()
    return (alpha: string, shiftDiff: number) => {
        const cacheKey = alpha + shiftDiff
        if (!cacheMap.has(cacheKey)) {
            cacheMap.set(cacheKey, String.fromCharCode(alpha.charCodeAt(0) + shiftDiff))
        }
        return cacheMap.get(cacheKey)
    }
}

console.log(replaceDigits('a1b2c3d4e'))
