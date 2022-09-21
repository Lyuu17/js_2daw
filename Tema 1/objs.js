const obj1 = { a: "123"}; 
const obj2 = { ... obj1  };
obj2.a = 123455555555556;

console.log(obj1);
console.log(obj2);

console.log(typeof(function(){}));