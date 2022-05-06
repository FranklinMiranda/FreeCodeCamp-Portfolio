// Telephone Number Validator
console.log(new Date(2022, 4, 4, 15, 4));

function telephoneCheck(str) {
  str = str.match(/\S/g).join('');

  if (/[^0-9-()]/g.test(str)) {
    return false;
  }

  let testStr = str.match(/[^0-9]/g);
  if (testStr) {
    testStr = testStr.join('');
  }

  str = str.match(/[0-9]/g).join('');

  if (testStr === '()-' || testStr === '--' || testStr === null) {
    if (str.length < 9) {
      return false;
    } else if (str.length === 10) {
      return true;
    } else if (str.length === 11 && str[0] == 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(telephoneCheck('555-555-5555'));

// function telephoneCheck(str) {
//   str = str.match(/\S/g).join('');

//   if (/[^0-9-()]/g.test(str)) {
//     return false;
//   }

//   let testStr = str.match(/[^0-9]/g);
//   if (testStr) {
//     testStr = testStr.join('');
//   }
//   console.log(testStr);
//   str = str.match(/[0-9]/g).join('');
//   console.log(testStr);
//   console.log(str.length);
//   if (testStr === '()-' || testStr === '--' || testStr === null) {

//     if (str.length > 11 && str[0] != 1) {
//       return false;
//     } else if (str.length > 10 || str[0] != 1) {
//       return true;
//     } else if (str.length > 9) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
