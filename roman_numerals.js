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

  const numerals = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90,
                     'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };

  let output = [];

  for (let key in numerals) {
    while (num >= numerals[key]) {
      output.push(key)
      num -= numerals[key]
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
