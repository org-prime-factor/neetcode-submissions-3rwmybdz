class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        let i =1;
        let len = intervals.length;
        let mergedIntervals = [];
        intervals = intervals.sort((a,b)=>a[0]-b[0]);
        let newInterval = intervals[0];

        while(i<len){
            let currInterval = intervals[i];
            if(newInterval[1]>= currInterval[0]){
                // If newInterval.end > currInterval.start
                // It means there is an overlap within these interval
                // so we club these intervals into one
                newInterval=[Math.min(newInterval[0],currInterval[0]),Math.max(newInterval[1],currInterval[1])]
                // now we will have a new merged interval
                // we update it and check if the new Interval can be still merged 
                // If it can continue

            }else{
                mergedIntervals.push(newInterval);
                newInterval = currInterval;
            }
            i++;
        }
        // as we keep on merging if we reach the last interval as well we merge it 
        // and then push the merged interval

        if(i==len){
            mergedIntervals.push(newInterval);
        }
        return mergedIntervals;
    }
}
