function canBeEqual(target: number[], arr: number[]): boolean {
    const targetMap = new Map()
    const arrMap = new Map()
    for(let i = 0; i < target.length; i++){
        targetMap.set(target[i], ((targetMap.get(target[i]) || 0) + 1))
        arrMap.set(arr[i], ((arrMap.get(arr[i]) || 0) + 1))
    }
    for(const [k,v] of targetMap){
        if(!arrMap.has(k) || v !== arrMap.get(k)){
            return false
        }
    }
    return true
};

canBeEqual([3,7,9],[3,7,11])