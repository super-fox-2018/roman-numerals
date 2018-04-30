function toRoman(input) {
  // start your code here
 var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
 var roman  = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var angka = input;
 var disp = [];

for(let b=0; b<=input; b++){
  
   for(let a=0; a<=number.length-1; a++){ 
    if(angka >= number[a]){
      angka -= number[a];
      disp.push(roman[a]);
      break;
      }
   }
     if(angka === 0){
       break;
     }
}
  
 return disp.join('');

  //return to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))