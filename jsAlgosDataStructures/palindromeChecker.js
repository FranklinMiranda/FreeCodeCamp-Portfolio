// Palindrome Checker
console.log(new Date(2022, 4, 4, 13, 22));

function palindrome(str) {
  str = str
    .toLowerCase()
    .match(/[A-Za-z0-9]/gi)
    .join('');
  return str === str.split('').reverse().join('');
}

palindrome('eye');
console.log(palindrome('wewwewwewwewwewwewwew'))