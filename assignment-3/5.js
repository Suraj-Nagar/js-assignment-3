const prompt = require("prompt-sync")();
function areaOfcircle(r){ 
    return Math.PI*Math.pow(r,r);
    
}
let radius=prompt('Enter the radius of circle:');
const ans=areaOfcircle(radius);
console.log(`The area of circle is ${ans}.`);
