class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < str.length) { 
        const delimiterIndex = str.indexOf('#', i);
         
        const length = parseInt(str.substring(i, delimiterIndex), 10);
         
        i = delimiterIndex + 1;
         
        const segment = str.substring(i, i + length);
        result.push(segment);
         
        i += length;
        }

        return result;
    }
}
