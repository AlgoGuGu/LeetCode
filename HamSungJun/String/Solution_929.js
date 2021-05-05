/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    return emails.reduce((acc, curr) => {
        const split = curr.split('@')
        let localName = split[0]
        const domainName = split[1]
        const firstPlusIndex = localName.indexOf('+')
        if(firstPlusIndex !== -1){
            localName = localName.slice(0, firstPlusIndex)
        }
        localName = localName.replace(/\./g, '')
        acc.add(`${localName}@${domainName}`)
        return acc
    }, new Set()).size
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])