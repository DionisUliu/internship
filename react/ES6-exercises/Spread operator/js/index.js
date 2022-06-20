let arrSmallNums = [1, 2, 3, 4, 5];
let arrBigNums = [10, 20, 30, 40, 50];
// let arrBigNums = [...arrSmallNums, 10, 20, 30, 40, 50];
let ConcatArray = [...arrSmallNums, ...arrBigNums];
// Output: array1 , array2, Concatenated array
console.log("First array: " + arrSmallNums);
console.log("Second array: " + arrBigNums);
console.log("Concatenated array: " + arrBigNums);
