// Cash Register
console.log(new Date(2022, 4, 5, 19, 34));

function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();
  let balanceVal = cash - price;
  balanceVal = parseFloat(balanceVal.toFixed(2));

  let denomArr = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeQuantArr = cid.map(function (val) {
    return parseFloat(val[1]);
  });
  let changeTotVal = cid.reduce(function (total, val) {
    return (total += val[1]);
  }, 0);
  let resultObj = { status: 'DEFAULT', change: [] };
  if (changeTotVal < balanceVal || balanceVal < 0) {
    resultObj.status = 'INSUFFICIENT_FUNDS';
    return resultObj;
  } else if (changeTotVal == balanceVal) {
    resultObj.status = 'CLOSED';
    resultObj.change = cid;
    resultObj.change = resultObj.change.reverse();
    return resultObj;
  }

  for (let i = 0; i < cid.length; i++) {
    let remDenomVal = 0;
    for (let j = i; j < changeQuantArr.length; j++) {
      remDenomVal += changeQuantArr[j];
    }
    remDenomVal = remDenomVal.toFixed(2);

    if (balanceVal > remDenomVal) {
      resultObj.status = 'INSUFFICIENT_FUNDS';
      return resultObj;
    } else if (balanceVal >= denomArr[i] && cid[i][1] !== 0) {
      const quant = Math.min(parseInt((balanceVal) / denomArr[i]), cid[i][1] / denomArr[i]);
      console.log(quant);

      resultObj.change.push([cid[i][0], quant * denomArr[i]]);
      balanceVal -= quant * denomArr[i];

      cid[i][1] -= quant * denomArr[i];
      resultObj.status = 'OPEN';
    }
  }

  return resultObj;
}

console.log(
  checkCashRegister(9, 10, [
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

// function checkCashRegister(price, cash, cid) {
//   cid = cid.reverse();
//   let returnedBalance = cash - price;
//   let denominationVal = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
//   let changeQuantity = cid.map(function (val) {
//     return parseFloat(val[1]);
//   });
//   let changeTotal = cid.reduce(function (total, val) {
//     return (total += val[1]);
//   }, 0);
//   let resultObj = { status: '', change: [] };

//   if (changeTotal < returnedBalance) {
//     resultObj.status = 'INSUFFICIENT_FUNDS';
//     return resultObj;
//   } else if (changeTotal === returnedBalance) {
//     resultObj.status = 'CLOSED';
//     resultObj.change = cid;
//     return resultObj;
//   }

//   denominationVal.forEach(function (val, index) {
//     let remainingDenomBalance = 0;
//     for (index; index < changeQuantity.length; index++) {
//       remainingDenomBalance += changeQuantity[index];
//     }
//     remainingDenomBalance = remainingDenomBalance.toFixed(2);
//     console.log(remainingDenomBalance);

//     if (returnedBalance > remainingDenomBalance) {
//       resultObj.status = 'INSUFFICIENT_FUNDS';
//       return resultObj;
//     } else if (returnedBalance >= val && cid[index][1] !== 0) {
//       const quant = Math.min(parseInt(returnedBalance / val + 0.01), cid[index][1] / val);

//       resultObj.push([cid[index][0], quant * val]);
//       returnedBalance -= quant * val;
//       cid[index][1] -= quant * val;
//       console.log(quant);
//       console.log(resultObj);
//     }
//   });

//   return { status: 'OPEN', change: resultObj };
// }

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );
