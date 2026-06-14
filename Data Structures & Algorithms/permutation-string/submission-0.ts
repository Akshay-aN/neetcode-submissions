class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        // Create frequency maps for English lowercase letters (size 26)
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        const getCharCodeIndex = (char: string): number => char.charCodeAt(0) - 97;

        // Initialize the first window
        for (let i = 0; i < s1.length; i++) {
            s1Count[getCharCodeIndex(s1[i])]++;
            s2Count[getCharCodeIndex(s2[i])]++;
        }

        // Count how many character frequencies match initially
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++;
        }

        // Slide the window across s2
        for (let i = s1.length; i < s2.length; i++) {
            if (matches === 26) return true;

            const newCharIndex = getCharCodeIndex(s2[i]);
            const oldCharIndex = getCharCodeIndex(s2[i - s1.length]);

            // Add new character to the window
            s2Count[newCharIndex]++;
            if (s2Count[newCharIndex] === s1Count[newCharIndex]) {
                matches++;
            } else if (s2Count[newCharIndex] === s1Count[newCharIndex] + 1) {
                matches--;
            }

            // Remove old character from the window
            s2Count[oldCharIndex]--;
            if (s2Count[oldCharIndex] === s1Count[oldCharIndex]) {
                matches++;
            } else if (s2Count[oldCharIndex] === s1Count[oldCharIndex] - 1) {
                matches--;
            }
        }

        return matches === 26;
    }
}
