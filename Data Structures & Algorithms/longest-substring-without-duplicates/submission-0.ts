class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxStringLength = 0;
        let l = 0;
        let seen = new Set();

        for (let r = 0; r < s.length; r++) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            maxStringLength = Math.max(maxStringLength, r - l + 1);
        }

        return maxStringLength;
    }
}
