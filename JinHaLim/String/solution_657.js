/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let robot = new Array(0,0);
    moves.split('').forEach(ele => {
        console.log(ele);
        switch (ele) {
            case 'U':
                ++robot[1];
                break;
            case 'D':
                --robot[1];
                break;
            case 'L':
                --robot[0];
                break;
            case 'R':
                ++robot[0];
                break;
            default:
                break;
        }
        console.log(robot)
    });
    return robot.every((val) => val === 0);
    
};
console.log(judgeCircle("UD"))