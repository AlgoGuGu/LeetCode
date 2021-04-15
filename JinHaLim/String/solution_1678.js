var interpret = function(command){
    let string = command;
    while (string.includes('()')||string.includes('(al)')) {
        string = string.replace('()','o');
        string = string.replace('(al)','al');
    }
    return string;
}