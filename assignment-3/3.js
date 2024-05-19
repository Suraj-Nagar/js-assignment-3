function countProperties(obje){
    return Object.keys(obje).length
}
const obj={
    name:'vijay malya',
    staus:'fraud',
    city:'England',
    age:65
};

const NOofProperties = countProperties(obj);
console.log(`The object has ${NOofProperties} properties.`);
