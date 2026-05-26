class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                
                // Skip empty cells denoted by "."
                if (val === ".") continue;

                // Determine the 3x3 box index (0-8)
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // If value already exists in row, column, or box, it's invalid
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                // Mark value as seen
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true;
    }
}
