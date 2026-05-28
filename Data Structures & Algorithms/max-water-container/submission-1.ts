class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number { 
        let [area,l,r] = [0,0,heights.length-1];
        while(l<r){
            let currArea = 0; 
            currArea = Math.min(heights[l],heights[r]) * (r-l);
            heights[l] < heights[r] ? l++:r--;
            area = Math.max(area,currArea)
        }
        return area;
    }
}
