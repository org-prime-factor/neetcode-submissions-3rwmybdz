/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals= intervals.sort((a,b)=>a.start-b.start);
        let prevMeeting = intervals[0];
        let i=1;
        while(i<intervals.length){
            let newMeeting = intervals[i];
            if(prevMeeting.end > newMeeting.start){
                // we have a conflict
                return false;
            }else{
                prevMeeting = newMeeting;
            }
            i++;
        }
        return true;
    }
}
