function palindrome(str) {
  const regex = /[^A-Za-z0-9]/ig;
  str = str.replace(regex,'').toLowerCase();
  let strRev = str.split('').reverse().join('');
  if (str === strRev) 
    return true;
  else 
    return false;
}

console.log(palindrome("A man, a plan, a canal. Panama")); //returns true
