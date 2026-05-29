class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let [l,r] = [0,1];
        let sell = 0;
        while(r < prices.length){
            let maxSell = 0; 
            prices[l] <= prices[r] ?  maxSell = prices[r] - prices[l] : l=r;
            r++;
            sell = Math.max(maxSell,sell);
        }
        return sell;
    }
}
