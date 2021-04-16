/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let out = ''
    for(let i = 0; i < address.length; i++){
        const nextChar = address.charAt(i)
        if(nextChar === '.'){
            out += '[.]'
            continue
        }
        out += nextChar
    }
    return out
};