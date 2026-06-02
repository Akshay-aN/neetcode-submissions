class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    searchMatrix(matrix: number[][], target: number): boolean {
        let flatMatrix = matrix.flat(1);
        let m = 0 ; 
        let [l,r] = [0,flatMatrix.length-1];
        while(l<=r){
            const m = Math.floor((l + r) / 2);
            if(target === flatMatrix[m]) return true;
            else if (flatMatrix[m] > target) r = m - 1;   
            else                       l = m + 1;
        }
        return false;
    }
}
