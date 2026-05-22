class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const dict1 = {};
        const dict2 = {};

        // Fill dictionary 1
        for (const char of s) {
            dict1[char] = (dict1[char] || 0) + 1;
        }

        // Fill dictionary 2
        for (const char of t) {
            dict2[char] = (dict2[char] || 0) + 1;
        }

        // Verify counts match using modulo logic on the combined values
        for (const key in dict1) {
            // A key must exist in both and their combined sum must be even (since they should be equal)
            const combinedTotal = (dict1[key] || 0) + (dict2[key] || 0);
            
            if (!dict2[key] || combinedTotal % 2 !== 0) {
            return false;
            }
        }

        return true;
}
}