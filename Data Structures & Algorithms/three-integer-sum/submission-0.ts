class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
         const result: number[][] = [];
    
    // 1. Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Optimization: If the current number is greater than 0, 
        // the remaining numbers will also be greater than 0, so they cannot sum to 0.
        if (nums[i] > 0) break;
        
        // Skip duplicate values for the first element to ensure unique triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        
        // 2. Use two pointers to find the remaining two numbers
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate values for the left pointer
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicate values for the right pointer
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                // Move both pointers inward after finding a valid triplet
                left++;
                right--;
            } else if (sum < 0) {
                // Sum is too small, move left pointer to increase the sum
                left++;
            } else {
                // Sum is too large, move right pointer to decrease the sum
                right--;
            }
        }
    }
    
    return result;
    }
}
