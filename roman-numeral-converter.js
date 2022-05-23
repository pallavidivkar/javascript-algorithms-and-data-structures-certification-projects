function convertToRoman(num) {
 let roman = {
   1:'I',2:'II',3:'III',4:'IV',5:'V',
   6 : 'VI',7:'VII',8:'VIII',9:'IX',10: 'X',
   20:'XX',30:'XXX',40:'XL',50:'L',
   60:'LX',70:'LXX',80:'LXXX',90:'XC',
   100:'C',200:'CC',300:'CC',400:'CD',
   500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',1000: 'M'
 };
 let romanNumber = [];
 let numArr = num.toString().split('').reverse();
 for (let i=0;i<4;i++) {
   if (numArr[i]==0) {
     romanNumber[i] = '';
   }
   else {
    if (i===0) {
      romanNumber[i] = roman[numArr[i]];
    }
    if (i===1) {
      let temp = numArr[i]*10;
      romanNumber[i] = roman[temp];
    }
    if (i===2) {
      let temp = numArr[i]*100;
      romanNumber[i] = roman[temp];
    }
    if (i===3) {
      romanNumber[i] = roman['1000'].repeat(numArr[i]);
    }
  }
 }
 romanNumber = romanNumber.reverse().join('');
 return romanNumber;
}

console.log(convertToRoman(2014)); //returns MMXIV 
