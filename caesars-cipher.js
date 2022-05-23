function rot13(str) {
  let cipher = {
    'N':'A','O':'B','P':'C','Q':'D','R':'E','S':'F',
    'T':'G','U':'H','V':'I','W':'J','X':'K','Y':'L',
    'Z':'M','A':'N','B':'O','C':'P','D':'Q','E':'R',
    'F':'S','G':'T','H':'U','I':'V','J':'W','K':'X',
    'L':'Y','M':'Z'
  }
  function stringcipher(match, string) {
    return cipher[match];
  }
  return str.replace(/[A-Z]/g, stringcipher);
  
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //returns THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(rot13("SERR PBQR PNZC")); //returns FREE CODE CAMP
