class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const charCount: Record<string, number> = {};
        let left = 0;
        let maxFrequency = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const rightChar = s[right];
             
            charCount[rightChar] = (charCount[rightChar] || 0) + 1;
             
            maxFrequency = Math.max(maxFrequency, charCount[rightChar]); 
            if ((right - left + 1) - maxFrequency > k) {
                const leftChar = s[left];
                charCount[leftChar]--;
                left++; 
            }
 
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
