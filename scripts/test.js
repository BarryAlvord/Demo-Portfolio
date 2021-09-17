var z = []

function money_2_coin(money, coin = [25, 10, 5, 2, 1]) {
    for (var i = 0; i < coin.length; i++) {
        if (money >= coin[i]) {
            money = money - coin[i];
            z.push(coin[i])
        }
    }
    return z
}

console.log(money_2_coin(10));