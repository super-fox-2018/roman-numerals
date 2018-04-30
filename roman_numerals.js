function to_roman (num) {
  var resultRomanNumeral=[]
  var romanNumeral=[
    {
      number:1000,
      roman:'M'
    },
    {
      number:900,
      roman:'CM'
    },
    {
      number:500,
      roman:'D'
    },
    {
      number:400,
      roman:'CD'
    },
    {
      number:100,
      roman:'C'
    },
    {
      number:90,
      roman:'XC'
    },
    {
      number:50,
      roman:'L'
    },
    {
      number:40,
      roman:'XL'
    },
    {
      number:10,
      roman:'X'
    },
    {
      number:9,
      roman:'IX'
    },
    {
      number:5,
      roman:'V'
    },
    {
      number:4,
      roman:'IV'
    },
    {
      number:1,
      roman:'I'
    }
  ]

  for (var i = 0; i < romanNumeral.length; i++) {
    while (num >= romanNumeral[i].number) {
      num = num - romanNumeral[i].number
      resultRomanNumeral.push(romanNumeral[i].roman)
    }
  }
  return resultRomanNumeral.join('')
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
