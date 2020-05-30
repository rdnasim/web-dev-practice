//forecast today is 293 Kelvin
const kelvin = 0;
//convert Kelvin to Celsius
const celsius = kelvin - 273;
//calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// get a decimal number.
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);
