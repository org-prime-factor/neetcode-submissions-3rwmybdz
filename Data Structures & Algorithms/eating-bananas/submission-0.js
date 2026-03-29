class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxPile = 0;
        for (const pile of piles) {
            maxPile = Math.max(maxPile, pile)
        }
        let low = 1;
        let high = maxPile;
        console.log("high ", high)
        let minEatingSpeed = Infinity;
        while (low <= high) {
            let mid = Math.trunc((low + high) / 2);
            let sum = 0;
            for (const pile of piles) {
                sum += Math.ceil(pile / mid);
            }
            if (sum <= h) {
                high = mid - 1;
                minEatingSpeed = Math.min(mid, minEatingSpeed);
            } else {
                low = mid + 1;
            }

        }
        return minEatingSpeed;
    }
}
