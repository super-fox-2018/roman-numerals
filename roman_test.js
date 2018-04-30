function to_roman(num) {
    // your implementation code here
    const romanNum = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M' }
    let arrRoman = [];

    while (num > 0) {
        var isFound = false;
        for (var key in romanNum) {
            if (parseInt(key) === num) {
                arrRoman.push(romanNum[key]);
                num = num - parseInt(key);
                isFound = true;
            }
        }
        if (!isFound) {
            if (num > 3000) {
                return "Invalid";
            }
            if (num >= 1000 && num <= 3000) {
                arrRoman.push(romanNum[1000]);
                num = num - 1000;
            } else if (num >= 900) {
                arrRoman.push(romanNum[900]);
                num = num - 900;
            }
            else if (num >= 500) {
                arrRoman.push(romanNum[500]);
                num = num - 500;
            } else if (num >= 400) {
                arrRoman.push(romanNum[400]);
                num = num - 400;
            }
            else if (num >= 100) {
                arrRoman.push(romanNum[100]);
                num = num - 100;
            } else if (num >= 90) {
                arrRoman.push(romanNum[90]);
                num = num - 90;
            }
            else if (num >= 50) {
                arrRoman.push(romanNum[50]);
                num = num - 50;
            }
            else if (num >= 40) {
                arrRoman.push(romanNum[40]);
                num = num - 40;
            }
            else if (num >= 10) {
                arrRoman.push(romanNum[10]);
                num = num - 10;
            }
            else if (num >= 5) {
                arrRoman.push(romanNum[5]);
                num = num - 5;
            } else if (num > 0) {
                arrRoman.push(romanNum[1])
                num = num - 1;
            }
        }
    }
    return arrRoman.join('');
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
// console.log(to_roman(9));
// console.log(to_roman(14));
// console.log(to_roman(49));
// console.log(to_roman(99));
//     console.log(to_roman(200));
//     console.log(to_roman(3000));
//     console.log(to_roman(499));
