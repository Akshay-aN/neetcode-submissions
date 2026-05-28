class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [l,r] = [0,numbers.length-1];
        let currSum = 0;
        while (l<r){
            currSum = numbers[l] + numbers[r];
            if(currSum > target){
                r-=1;
            }
            else if(currSum < target){
                l+=1;
            }
            else{
                return [l+1,r+1]; 
            } 
        }
    }
}
