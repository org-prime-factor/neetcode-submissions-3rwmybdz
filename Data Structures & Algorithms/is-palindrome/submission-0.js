class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left =0;
        let right = s.length -1;
        while(left<=right){
            if(!this.isAlphaNumeric(s[left])){
                left++;
                continue;
            }
             if(!this.isAlphaNumeric(s[right])){
                right--;
                continue;
            }
            if(s[left].toLowerCase()==s[right].toLowerCase()){
                left++;
                right--;
            }else{
                return false;
            }
        }
        return true;
    }
    isAlphaNumeric(char){
        return /^[a-zA-Z0-9]$/.test(char)
    }
}
