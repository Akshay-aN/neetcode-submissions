class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */ 
    groupAnagrams(strs: string[]): string[][] {
        const sortedStrs = strs.map(str => [...str].sort().join(''));
    
        const result : string[][] = Object.values(
            sortedStrs.reduce((acc, curr, index) => {
                if (!acc[curr]) acc[curr] = [];
                acc[curr].push(strs[index]);
                return acc;
            }, {})
        );
        return result;
    }
}
