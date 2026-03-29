class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minPrice = Infinity;
        for (let price of prices){
            if(price<minPrice){
                minPrice = price;
            }else{
                profit= Math.max(profit, price -minPrice)
            }
        }
        return profit;
    }
}
