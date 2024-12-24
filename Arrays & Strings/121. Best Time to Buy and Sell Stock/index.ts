function maxProfit(prices: number[]): number {
    let min: number = prices[0];
    let profit: number = 0;

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