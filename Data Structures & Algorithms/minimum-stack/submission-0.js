class MinStack {
    constructor() {
        this.array = [];
    this.minSt = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val);
    if (this.minSt.length == 0)
        this.minSt.push(val);
    else if (val <= this.minSt.at(-1))
        this.minSt.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.array.at(-1);
    const min = this.minSt.at(-1)
    if (val == min) {
        this.minSt.pop();
    }
    this.array.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.array.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
         return this.minSt.at(-1)
    }
}
