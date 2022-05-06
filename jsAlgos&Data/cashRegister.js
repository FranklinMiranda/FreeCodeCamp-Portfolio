// Cash Register
console.log(new Date(2022, 4, 5, 19, 34));

function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();
  let balance = cash - price;
  console.log(balance);
  console.log(cid);

  let changeVal = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let change = cid.map(function (val) {
    return parseFloat(val[1]);
  });
  let changeTotal = cid.reduce(function (total, val) {
    return (total += val[1]);
  }, 0);
  console.log(changeVal);
  console.log(change);
  console.log(changeTotal);

  if (changeTotal < balance) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (changeTotal === balance) {
    return { status: 'CLOSED', change: cid };
  }

  let result = [];
  changeVal.forEach(function (val, i) {
    console.log(val);
    console.log(i);

    let remainingBalance = change.reduce(function (total, value, index) {
      if (index >= i) {
        return (total += value);
      }
    }, 0);
    console.log(remainingBalance);

    if (balance > 0 && val === 0) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] };
    } else if (balance > remainingBalance) {
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
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);

//   if (balance > cid[i][1]) {
//     return { status: 'INSUFFICIENT_FUNDS', change: [] };
//   }
