class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        let minSpeed = right;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let hoursNeeded = 0;
            for (const pile of piles) {
                hoursNeeded += Math.ceil(pile / mid); 
            }
            if (hoursNeeded <= h) {
                minSpeed = mid; 
                right = mid - 1; 
            } else {
                left = mid + 1;
            }
        }
        return minSpeed;
    }
}
