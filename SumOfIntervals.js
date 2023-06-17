//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervalsSmall(intervals) { //simple but wont work with big numbers. O^2 difficulty
    //TODO
    let uniques = new Set();
    let 
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0] + 1; j <= intervals[i][1]; j++) {
            uniques.add(j);
        }
    }
    console.log(uniques);
    return uniques.size;
}

function sumIntervals(intervals) { // O(n logn)
    // sort the intervals 
    let result = 0;
    intervals.sort(([a,b],[c,d])=>{
        return a-c;
    })
    console.log(intervals);
    let current_start = intervals[0][0];
    let current_end = intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0] > current_end){
            result += current_end - current_start;
            current_start = intervals[i][0];
            current_end = intervals[i][1];
        }
        else{
            current_end = Math.max(current_end, intervals[i][1]);
        }
    }
    result += current_end - current_start;
    return result;
}
