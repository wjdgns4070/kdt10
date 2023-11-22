//구조분해할당

// 1. 배열 구조분해할당
// -순서가 중요함

const arr1 = [1,2,3,4,5];
const arr2 =['a','b','c']

const [one, two, three, four, five] = arr1
console.log(one, two, three, four, five);
const [x,y,z,alpha] = arr2
console.log(x,y,z,alpha)

const list = ['apple', 'orange'];
const [f1,f2,f3 = 'banana'] = list
console.log(f1,f2,f3);

let num1 = 1, num2 = 3;
console.log('swap전 >', num1, num2);
[num1, num2] = [num2, num1];
consol.log('swap전 >', num1, num2)