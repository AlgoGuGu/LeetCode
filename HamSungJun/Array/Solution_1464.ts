function maxProduct(nums: number[]): number {
    nums.sort((a: number, b: number) => {
        return Number((a < b)) - Number((a > b))
    })
    return (nums[0] - 1) * (nums[1] - 1)
};

maxProduct([3,4,5,2])