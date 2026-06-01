class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;
        const bracketMap: Record<string, string> = {
            ')': '(',
            '}': '{',
            ']': '['
        };
    
        const stack: string[] = []; 
        for (const char of s) {
            if (char in bracketMap) { 
                const topElement = stack.pop(); 
                if (topElement !== bracketMap[char]) {
                    return false;
                }
            } else { 
                stack.push(char);
            }
        }
        return stack.length === 0;

    }
}
