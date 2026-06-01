class MinStack {
    private mainStack: number[];
    private minStack: number[];

    constructor() {
        this.mainStack = [];
        this.minStack = [];
    } 
    push(val: number): void {
        this.mainStack.push(val);
        if (this.minStack.length === 0) {
        this.minStack.push(val);
        } else {
        const currentMin = this.minStack[this.minStack.length - 1];
        this.minStack.push(Math.min(val, currentMin));
        }
    }

    pop(): void {
        if (this.mainStack.length === 0) return;
        this.mainStack.pop();
        this.minStack.pop();
    } 
    top(): number | undefined {
        if (this.mainStack.length === 0) return undefined;
        return this.mainStack[this.mainStack.length - 1];
    }
 
    getMin(): number | undefined {
        if (this.minStack.length === 0) return undefined;
        return this.minStack[this.minStack.length - 1];
    }
}
