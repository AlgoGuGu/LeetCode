/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        const filterArr = arr.filter((_,index) => index > i);
        // console.log(filterArr)
        for (let j = 0; j < filterArr.length; j++) {
            const ele2 = filterArr[j];
            if(Math.abs(ele-ele2) > a) continue;
            const filterArr2 =  filterArr.filter((_,index) => index > j);
            for (let k = 0; k < filterArr2.length; k++) {
                const ele3 = filterArr2[k];
                if(Math.abs(ele2-ele3) > b) continue;
                if(Math.abs(ele3-ele) > c ) continue;
                // console.log(ele,ele2,ele3)
                result.push([ele,ele2,ele3]);    
            }
        }
    }
    return result.length;
};
console.log(countGoodTriplets([3,0,1,1,9,7],7,2,3))