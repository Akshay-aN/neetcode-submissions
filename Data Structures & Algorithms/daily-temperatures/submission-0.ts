class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = new Array(temperatures.length).fill(0);
        const stack: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            // While the current temperature is warmer than the temperature
            // at the index on top of the stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop()!;
                result[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }

        return result;
    }
}
