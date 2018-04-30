function to_roman (num) {
  
    var numerals = ['I','V','X','L','C','D','M']
    var numeralValue = [1,5,10,50,100,500,1000]
    var number = num 
    var result =''

    for(x=0; x<100; x++) {

        if(number>=1000) {
            result += numerals[6]
            number -= 1000
        }   else if(number>=900) {
            result += numerals[4]
            result += numerals[6]
            number -= 900
        }   else if(number>=500) {
            result += numerals[5]
            number -= 500
        }   else if(number>=400) {
            result += numerals[4]
            result += numerals[5]
            number -= 400
        }   else if(number>=100) {
            result += numerals[4]
            number -= 100
        }   else if(number>=90) {
            result += numerals[2]
            result += numerals[4]
            number -= 90
        }   else if(number>=50) {
            result += numerals[3]
            number -= 50
        }   else if(number>=40) {
            result += numerals[2]
            result += numerals[3]
            number -= 40
        }   else if(number>=10) {
            result += numerals[2]
            number -= 10
        }   else if(number>=9) {
            result += numerals[0]
            result += numerals[2]
            number -= 9
        }   else if(number>=5) {
            result += numerals[1]
            number -= 5
        }   else if(number>=4) {
            result += numerals[0]
            result += numerals[1]
            number -= 4
        }   else if(number>=1) {
            result += numerals[0]
            number -= 1
        }     
    } 
    
    return result
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
