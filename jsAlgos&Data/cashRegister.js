// Cash Register
console.log(new Date(2022, 4, 5, 19, 34));

function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();
  let balance = cash - price;
  let denominationVal = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeQuantity = cid.map(function (val) {
    return parseFloat(val[1]);
  });
  let changeTotal = cid.reduce(function (total, val) {
    return (total += val[1]);
  }, 0);
  let result = [];

  if (changeTotal < balance) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (changeTotal === balance) {
    return { status: 'CLOSED', change: cid };
  }

  denominationVal.forEach(function (val, i) {
    let remainingDenomBalance = 0;
    for (i; i < changeQuantity.length; i++) {
      remainingDenomBalance += changeQuantity[i];
    }

    console.log(remainingDenomBalance);

    if (balance > remainingDenomBalance) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    } else if (balance >= val && cid[i][1] !== 0) {
      const quant = Math.min(parseInt(balance / val + 0.01), cid[i][1] / val);

      result.push([cid[i][0], quant * val]);
      balance -= quant * val;
      cid[i][1] -= quant * val;
      console.log(quant);
      console.log(result);
    }
  });

  return { status: 'OPEN', change: result };
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
