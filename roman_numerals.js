function to_roman(num) {
  // your implementation code here
  const romanNum = { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' }
  let arrRoman = [];
  while (num > 0) {
    if (num > 3000){
      return "Invalid";
    }
    if (num >=1000 && num <= 3000){
      arrRoman.push(1000);
      num = num - 1000;
    } else if (num >= 900 && num < 1000){
      arrRoman.push(100);
      arrRoman.push(1000);
      num = num - 900;
    }

    if (num >= 500 && num < 900) {
      arrRoman.push(500);
      num = num - 500;
    } else if (num >= 400 && num < 500) {
      arrRoman.push(100);
      arrRoman.push(500);
      num = num - 400;
    }
    if (num >= 100 && num < 400) {
      arrRoman.push(100);
      num = num - 100;
    } else if (num >= 90 && num < 100) {
      arrRoman.push(10)
      arrRoman.push(100);
      num = num - 90;
    }

    if (num >= 50 && num < 90) {
      arrRoman.push(50);
      num = num - 50;
    } else if (num >= 40 && num < 50) {
      arrRoman.push(10)
      arrRoman.push(50);
      num = num - 40;
    }
    else if (num >= 10 && num < 40) {
      arrRoman.push(10);
      num = num - 10;
    } else if (num === 9) {
      arrRoman.push(1);
      arrRoman.push(10);
      num = num - 9;
    }

    if (num >= 5 && num < 9) {
      arrRoman.push(5);
      num = num - 5;
    } else if (num === 4) {
      arrRoman.push(1);
      arrRoman.push(5);
      num = num - 4;
    }

    if (num > 0 && num < 4) {
      arrRoman.push(1)
      num = num - 1;
    }
  }

  let romanRes = '';
  for (var i = 0; i < arrRoman.length; i++) {
    for (var key in romanNum) {
      if (arrRoman[i] === parseInt(key)) {
        romanRes = romanRes + romanNum[key];
      }
    }
  }
  return romanRes;
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
// console.log(to_roman(3));
// console.log(to_roman(4));
// console.log(to_roman(5));
// console.log(to_roman(7));
// console.log(to_roman(14));
// console.log(to_roman(49));
// console.log(to_roman(99));
// console.log(to_roman(123));
// console.log(to_roman(3000));
console.log(to_roman(499));
