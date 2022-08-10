// Caesar's Cipher
console.log(new Date(2022, 4, 4, 14, 39));

function rot13(str) {
  const alpha = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const regExp = /[A-Za-z]/;
  return str
    .split('')
    .map(function (value) {
      if (regExp.test(value)) {
        return (value = alpha[(alpha.indexOf(value) + 13) % 26]);
      } else {
        return value;
      }
    })
    .join('');
}

console.log(rot13('SERR CVMMN!'));
