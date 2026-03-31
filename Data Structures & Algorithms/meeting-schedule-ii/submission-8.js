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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const starts = intervals.map(i=>i.start).sort((a,b)=>a-b);
        const ends = intervals.map(i=>i.end).sort((a,b)=>a-b);

        let rooms = 0, maxRooms = 0;
        let s = 0, e = 0;
    
        while (s < intervals.length) {
            if (starts[s] < ends[e]) {
                // this speaks about how many overlapps happen
                rooms++;
                s++;
            } else {
                rooms--;
                e++;
            }
            maxRooms = Math.max(maxRooms, rooms);
        }
        return maxRooms;
    }
}
