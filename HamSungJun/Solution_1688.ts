function numberOfMatches (n: number): number {
    /**
     * 남은 토너먼트 팀이 짝수일때와 홀수일때
     * 필요한 연산을 진행하여 매치 카운트를 증가
     * 이후 승자팀이 결정되었을 때 카운트를 반환.
     */
    let numTeams = n
    let matchCount = 0
    while (numTeams > 1) {
        if (numTeams % 2 === 0) {
            numTeams /= 2
            matchCount += numTeams
        } else {
            numTeams = (numTeams - 1) / 2 + 1
            matchCount += numTeams - 1
        }
    }
    return matchCount
};

numberOfMatches(7)
