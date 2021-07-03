/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const balloon = ['b','a','l','l','o','o','n'];
    let count = 0;
    let isEnd = true;
    loop1:
    while (isEnd) {
        for (let i = 0; i < balloon.length; i++) {
            if(!text.split('').includes(balloon[i])) {
                isEnd = false;
                break loop1; 
            }
            else{
                text = text.replace(balloon[i],'');
            }
            
        }
        ++count;
    }
    
    return count;
    
};
console.log(maxNumberOfBalloons("nlaebolko"))