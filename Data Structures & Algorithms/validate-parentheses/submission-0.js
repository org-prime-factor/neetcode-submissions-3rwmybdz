class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack=[];
        const map={']':'[','}':'{',')':'('}
        for(let i=0;i<s.length;i++){
            let c = s[i];
            if(!stack.length && map[c])
                return false;
            else if(!map[c])
                stack.push(c);
            else if(map[c]== stack[stack.length-1])
                stack.pop();
            else return false;
        }
        return !stack.length;
    }
}
