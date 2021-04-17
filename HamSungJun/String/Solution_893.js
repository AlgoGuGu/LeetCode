/**
 * @param {string[]} A
 * @return {number}
 */
 var numSpecialEquivGroups = function(A) {
     const matchSet = new Set()
    A.forEach(word => {
        matchSet.add(word)
    })
    return matchSet.size
};

const refine = (word) => {
    const evenArr = []
    const oddArr = []
    for(let i = 0; i < word.length; i++){
        if(i % 2 === 0){
            evenArr.push(word[i])
        } else {
            oddArr.push(word[i])
        }
    }
    evenArr.sort()
    oddArr.sort()
    return (evenArr.join(''))+(oddArr.join(''))
}