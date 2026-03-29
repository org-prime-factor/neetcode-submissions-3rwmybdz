class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        let cnt =0;
        let prev = intervals[0];
        let i =1;
        while(i<intervals.length){
            let A = prev
            let B = intervals[i];
            if(A[1]>B[0]){
                // we found an overlap so
                cnt++;
                prev = [Math.min(A[0],B[0]), Math.min(A[1],B[1])];
            }else{
                prev = B;
            }
            i++;
        }
        return cnt;
    }
}
