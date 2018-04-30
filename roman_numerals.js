function to_roman(num) {
  let roman = '';
  let romanArray = [
  {name: 'M', value: 1000},
  {name: 'CM', value: 900},
  {name: 'D', value: 500},
  {name: 'CD', value: 400},
  {name: 'C', value: 100},
  {name: 'XC', value: 90},
  {name: 'L', value: 50},
  {name: 'XL', value: 40},
  {name: 'X', value: 10},
  {name: 'IX', value: 9},
  {name: 'V', value: 5},
  {name: 'IV', value: 4},
  {name: 'I', value: 1},
  ];
  while (num > 0) {
    for (var i = 0; i < romanArray.length; i++) {
      if (num >= romanArray[i].value) {
        roman += romanArray[i].name;
        num -= romanArray[i].value;
      }
    }
  }
  return roman;
}

// Drive code
console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|———————');
console.log('4     | IV       | ', to_roman(4));
console.log('9     | IX       | ', to_roman(9));
console.log('13    | XIII     | ', to_roman(13));
console.log('1453  | MCDLIII  | ', to_roman(1453));
console.log('1646  | MDCXLVI  | ', to_roman(1646));
