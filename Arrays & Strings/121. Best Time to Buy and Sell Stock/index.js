/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    // let minPrice = Infinity;
    // let maxProfit = 0;

    // for (const price of prices) {
    //     if (price < minPrice) {
    //         minPrice = price;
    //     }

    //     const profit = price - minPrice;
    //     if (profit > maxProfit) {
    //         maxProfit = profit;
    //     }
    // }

    // return maxProfit;

    // (2)
    let min = prices[0];
    let profit = 0;

    for (let price of prices) {
        if (min > price) {
            min = price;
        }

        if (profit < price - min) {
            profit = price - min;
        }
    }

    return profit;
};