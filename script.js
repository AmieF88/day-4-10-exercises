const nums1 = [1, 2, 3];
const multiplied = nums1.map(num => num * 10);
console.log(multiplied); 


const names = ["Amie", "Zaiden", "Gage", "Kamden", "Kirk", "Raven"];
const shortNames = names.filter(name => name.length < 5);
console.log(shortNames); 


const nums2 = [1, 2, 3, 4, 5];
nums2.forEach(num => {
  console.log(num + " - logged in terminal");
});
// I dont fully understand this one above, i had to use google to figure it out

const words = ["cadillac", "ford", "bmw", "audi", "lexus"];
const uppercased = words.map(word => word.toUpperCase());
console.log(uppercased);


const nums3 = [1, 2, 3, 4, 5, 6];
const evens = nums3.filter(num => num % 2 === 0);
console.log(evens);

const prices = [5, 10];
const formattedPrices = prices.map(price => price.toFixed(2));
console.log(formattedPrices); 
// I had to look up this one as well to get help, im still trying to understand this one


const words2 = ["Amie", "Car", "Antique", "Truck", "Airplane"];
const startsWithA = words2.filter(word => word.startsWith("A"));
console.log(startsWithA); 


const statusCodes = [200, 404, 500];
statusCodes.forEach(code => {
  console.log(`Status received: ${code}`);
});

const prices2 = [100, 50, 20];
const halfPrice = prices2.map(price => price * 0.5);
console.log(halfPrice); 

const scores = [55, 60, 88, 92, 40];
const passing = scores.filter(score => score > 65);
console.log(passing); 
