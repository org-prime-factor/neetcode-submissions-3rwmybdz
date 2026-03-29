class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let ans = 0;
    let neg = false;

    if (x < 0)
        neg = true;
    x = Math.abs(x);

    while (x > 0) {
        let num = x % 10
        x = Math.trunc(x / 10);
        if (ans == 0)
            ans = ans + num
        else
            ans = (ans * 10) + num
    }
    let limit = Math.pow(2, 31)
    if (ans > limit - 1 || ans < -limit)
        return 0

    return neg ? -ans : ans;
    }
}
