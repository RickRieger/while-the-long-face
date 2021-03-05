function numberDoubler(num) {
    
while(num <= 100){
  num = num *2
}
return num
}

function stringRepeater(str) {
let newString = ''
 while (newString.length < 10){
     newString += str
 }
 return newString
}

function makeDivisible(x, y) {
    while(x%y !== 0){
        x += 1
    }
    return x

}

// function makeDivisible(x, y) {
//     let outputX = x;
//     while (outputX % y !== 0) {
//         outputX++;
//     }
//     return outputX;
// }

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};