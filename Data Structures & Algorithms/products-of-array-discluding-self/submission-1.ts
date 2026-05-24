class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = nums.map((e,index)=>{
            return nums.reduce((acc, curr, currIndex) => { 
               if (index === currIndex) return acc; 
                return acc * curr;
            }, 1)
        })
        return result;
    }
}
