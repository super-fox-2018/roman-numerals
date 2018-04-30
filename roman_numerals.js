function to_roman (num) {
  var ang_romawi = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  var ang_latin = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romawi = [];
  while(num>0){
    for(var i = 0; i < ang_latin.length; i++){
      if (num>=ang_latin[ang_latin.length-1]) {
        romawi.push(ang_romawi[ang_romawi.length-1])
        num -= ang_latin[ang_latin.length-1];

      }
      else if(num >= ang_latin[i] && num < ang_latin[i+1]){
          romawi.push(ang_romawi[i]);
          num -= ang_latin[i];
      }
    }
  }
  return romawi;
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
