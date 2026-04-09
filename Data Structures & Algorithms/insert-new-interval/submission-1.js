class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {

        let length = intervals.length;
        let i=0;
        let mergedIntervals =[];
        
        // Inserting intervals in to array that appear before the newInterval
        while(i<length){
            let currInterval = intervals[i];
            if(currInterval[1]<newInterval[0]){
                // it means that the currInterval doesnt overlap with new interval
                mergedIntervals.push(currInterval);
            }else{
                break;
            }
            i++;
        }
        // Now if we are out of this loop it means that we found out interval that is over lapping
        while(i<length){
            let currInterval = intervals[i];
            if(Math.max(currInterval[0],newInterval[0])<=Math.min(currInterval[1],newInterval[1])){
                // there is an overlapping interval and we are still iterating to find if there are any other intervals
                // present in the array that can overlap
                newInterval = [Math.min(currInterval[0],newInterval[0]),Math.max(currInterval[1],newInterval[1])]
            }else if(currInterval[0]> newInterval[1]){
                // It means there is no overlapping intervals left in the array so we can exit from here
                  mergedIntervals.push(newInterval);
                  break;
            }
            i++;
        }
        // Now it means that we have inserted the newInterval and merged if tehre are any overlapping intervals
        // There can still be some more intervals left that need to pushed into the new array
         if (i == length) {
            // So this can happen we merged all intervals in the array.
            mergedIntervals.push(newInterval);
        }
        while(i<length){
             mergedIntervals.push(intervals[i]);
             i++;
        }
        return mergedIntervals;
    }
}
