class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean { 
        let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        for (let i = 0; i < str.length / 2; i++) {
            let index = str.length - i - 1;
            if (str[i] !== str[index]) {
                return false;
            }
        }
        return true;
    }
}
