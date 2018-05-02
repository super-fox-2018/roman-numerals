// function to_roman_before (num) {
//   // your implementation code here
//
//   // var arr = String(num);
//   var roman = [];
//
//   var numerals = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L',
//                   90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M' }
//
//   while (num > 0) {
//     if (num >= 1000) {
//       roman.push(numerals[1000]);
//       num -= 1000;
//     }
//     else if (num >= 900 && num < 1000) {
//       roman.push(numerals[900]);
//       num -= 900;
//     }
//     else if (num >= 500 && num < 900) {
//       roman.push(numerals[500]);
//       num -= 500;
//     }
//     else if (num >= 400 && num < 500) {
//       roman.push(numerals[400]);
//       num -= 400;
//     }
//     else if (num >= 100 && num < 400) {
//       roman.push(numerals[100]);
//       num -= 100;
//     }
//     else if (num >= 90 && num < 100) {
//       roman.push(numerals[90]);
//       num -= 90;
//     }
//     else if (num >= 50 && num < 90) {
//       roman.push(numerals[50]);
//       num -= 50;
//     }
//     else if (num >= 40 && num < 50) {
//       roman.push(numerals[40]);
//       num -= 40;
//     }
//     else if (num >= 10 && num < 40) {
//       roman.push(numerals[10]);
//       num -= 10;
//     }
//     else if (num === 9) {
//       roman.push(numerals[9]);
//       num -= 9;
//     }
//     else if (num >= 5 && num < 9) {
//       roman.push(numerals[5]);
//       num -= 5
//     }
//     else if (num === 4) {
//       roman.push(numerals[4]);
//       num -= 4
//     }
//     else if (num >= 1 && num < 4) {
//       roman.push(numerals[1]);
//       num -= 1
//     }
//   }
//
//   var display = roman.join('');
//   return display;
// }

function to_roman(num) {
  // const numerals = [
  //   { 1000: 'M' },
  //   { 900: 'CM' },
  //   { 500: 'D' },
  //   { 400: 'CD' },
  //   { 100: 'C' },
  //   { 90: 'XC' },
  //   { 50: 'L' },
  //   { 40: 'XL' },
  //   { 10: 'X' },
  //   { 9: 'IX' },
  //   { 5: 'V' },
  //   { 4: 'IV' },
  //   { 1: 'I' }
  // ]

  // const numerals = { 1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC',
  //                    50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};

  const numeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let output = [];

  for (let i = 0; i < numeral.length; i++) {
    while (num >= numeral[i]) {
      output.push(roman[i]);
      num -= numeral[i]
    }
  }

  return output.join('');

}
// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
