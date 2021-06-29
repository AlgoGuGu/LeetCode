/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
    return this;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch (carType) {
        case 1: //큰
            if (this.big > 0) {
                this.big -= 1;
                return true;
            }
            break;
        case 2: //중간
            if (this.medium > 0) {
                this.medium -= 1;
                return true;
            }
            break;
        case 3: //작은
            if (this.small > 0) {
                this.small -= 1;
                return true;
            }
            break;
        default:
            break;
    }
    return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
console.log(new ParkingSystem(1,1,0))
