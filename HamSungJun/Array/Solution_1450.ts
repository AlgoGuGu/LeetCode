function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let acc: number = 0
    for(let i = 0; i < startTime.length; i++){
        if(startTime[i] <= queryTime && queryTime <= endTime[i]){
            acc += 1
        }
    }
    return acc
};