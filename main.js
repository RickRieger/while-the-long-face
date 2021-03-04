function numberDoubler(num) {
   
   
    while(num < 100){
        num = num * 2;
    }
    return num
  }
  
  function stringRepeater(str) {
    let newStr = ''
    while(newStr.length < 10){
        newStr = str + newStr
    }
    return newStr
  }

  function makeDivisible(x, y) {
    let outputX = x;
    while (outputX % y !== 0) {
        outputX++;
    }
    return outputX;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};