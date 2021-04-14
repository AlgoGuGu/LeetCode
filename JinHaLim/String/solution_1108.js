var defangIPaddr = function(address) {
    let splitString = address.split('.');
    let result = '';
    for(let i = 0;i < splitString.length;i++){
        if(i !== 0) result += '[.]';
        result += splitString[i];

    }
    return result;
};