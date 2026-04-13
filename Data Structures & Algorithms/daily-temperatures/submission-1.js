class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const st = [];
        const ans = Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            if (st.length === 0) {
                st.push({ temp: temperatures[i], i });
            } else if (temperatures[i] <= st.at(-1).temp) {
                st.push({ temp: temperatures[i], i });
            } else {
                while (st.length != 0) {
                    const temp = st.pop();
                    ans[temp.i] = i - temp.i;
                    if (st.length != 0 && temperatures[i] <= st.at(-1).temp)
                        break;
                }
                st.push({ temp: temperatures[i], i });
            }
        }
        return ans;

    }
}
