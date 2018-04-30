function to_roman (num) {
  // your implementation code here
  var OnetoNine = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
  var TentoNinety = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
  var OneHundredtoNineHundred = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
  var OneThousandtoThreeThousand = ["","M","MM","MMM"]
  return OneThousandtoThreeThousand[parseInt(num/1000)]+OneHundredtoNineHundred[parseInt(num/100)%10]+TentoNinety[parseInt(num/10)%10]+OnetoNine[num%10]
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
