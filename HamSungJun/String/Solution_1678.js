/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    const parseMap = new Map()
    parseMap.set('G', 'G')
    parseMap.set('(al)', 'al')
    parseMap.set('()', 'o')

    let result = ''
    let acc = ''
    for(let i = 0; i < command.length; i++){
        acc += command.charAt(i)
        if(parseMap.has(acc)){
            result += parseMap.get(acc)
            acc = ''
        }
    }
    return result
};