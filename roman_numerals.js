/*
buat array untuk roman number and number biasanya
looping array numbers
looping dengan while ketika inputan number masih lebih besar dari array Numbers index ke sekian
kurangi selama kondisi masih sesuai
tmabhakan variabel roman dengan romman array yang indexnya sesuai dengan array number yang mengurangi inputan

*/
function to_roman (num) {
  // your implementation code here
  let intoRoman = ''
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for(var i=0;i<numbers.length;i++){
  	while(num>=numbers[i]){
  		intoRoman+=roman[i]
  		num-=numbers[i]
  	}
  }
return intoRoman
}

// Drive code
console.log('My totally sweet testing script for new roman')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
