class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    const st = [];
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        console.log("token", token)
        if (Number.isNaN(Number(token))) {
            const top1 = st.pop();
            const top2 = st.pop();
            let result;
            if (token == "+")
                result = top1 + top2;
            else if (token == "-")
                result = top2 - top1
            else if (token == "*")
                result = top1 * top2;
            else if (token == "/")
                result = Math.trunc(top2 / top1);
            st.push(result)
        }
        else {
            st.push(Number(token));
        }
        console.log("st ", st);
    }
    return st[0];
    }
}
