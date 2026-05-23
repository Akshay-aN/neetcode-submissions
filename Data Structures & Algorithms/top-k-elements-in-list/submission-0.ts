class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        // Create buckets where the index represents frequency
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        // 1. Count the frequency of each number
        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        // 2. Map frequencies to buckets
        for (const [num, freq] of countMap.entries()) {
            buckets[freq].push(num);
        }

        const result: number[] = [];
        // 3. Iterate through buckets from highest frequency to lowest
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        return result.slice(0, k);
    }
}
