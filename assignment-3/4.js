const prompt = require("prompt-sync")();
function hasProperty(obje,property){
return obje.hasOwnProperty(property)
}
const obj={
    name:'vijay malya',
    status:'fraud',
    city:'England',
    age:65
};
const propertyToCheck=prompt('enter property name:');
if(hasProperty(obj,propertyToCheck)){
    console.log(`The object has the property ${propertyToCheck}.`);
} else{
    console.log("This object does not have the property");
}
