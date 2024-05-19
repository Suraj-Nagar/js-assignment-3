const prompt = require("prompt-sync")();
function reverseString(stri){
    let arr= stri.split('');
    let rev=arr.reverse();
    let strr=rev.join('');
    return strr;
   
}
let str = prompt('enter string:');
const ans = reverseString(str);
console.log(ans);