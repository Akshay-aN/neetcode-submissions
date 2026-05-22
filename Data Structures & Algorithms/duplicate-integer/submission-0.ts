class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numSet = new Set(nums);
        return nums.length !== Array.from(numSet).length;
    }
}
