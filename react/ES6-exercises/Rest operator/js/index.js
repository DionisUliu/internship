//Sum of numbers with Rest
const findSum = (...numbers) => {
  let sum = 0;
  //forEach() loop to iterate and found the sum of numbers
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
};
//Output: 60
console.log("The sum of 10,20,30 is equal to " + findSum(10, 20, 30));
