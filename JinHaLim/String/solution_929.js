/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let mapEmail = new Map();
    emails.forEach(ele => {
        let localName = ele.split('@')[0];
        let domainName = ele.split('@')[1];
        localName = localName.split('+')[0];
        localName = localName.split('.').join('');
        console.log(localName,domainName)
        mapEmail.set(localName+'@'+domainName);
    });
    return mapEmail.size;
};
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))