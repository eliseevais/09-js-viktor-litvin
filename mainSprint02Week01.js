// let users = ['Bob', 'Alex', 'Donald'];
// console.log(users.sort())

// let newNumbers = numbers.sort();
// console.log(numbers.sort());
// let newNumbers = numbers.toSorted();
// console.log(numbers);
// console.log(newNumbers);

// let compareFunction = (a, b) => {
//   if (a > b) {
//     return 1
//   } else {
//     return -1
//   }
// };
// console.log(numbers.sort(compareFunction))

// const students = [
//   {
//     id: 1,
//     name: 'Mary',
//     age: 30,
//     isMarried: false,
//     scores: 90
//   },
//   {
//     id: 2,
//     name: 'Kostya',
//     age: 25,
//     isMarried: true,
//     scores: 39
//   },
//   {
//     id: 3,
//     name: 'Tima',
//     age: 28,
//     isMarried: false,
//     scores: 36
//   },
//   {
//     id: 4,
//     name: 'Irina',
//     age: 32,
//     isMarried: true,
//     scores: 95
//   }
// ]
//
// const compareFuncScore = (a, b) => {
//   if (a.scores > b.scores) {
//     return -1
//   } else {
//     return 1
//   }
// };
// console.log(students.sort(compareFuncScore))

let numbers = [-74, 1, 4, 27, 45, 6985, 59, 589, 1035];

let count = 0

for (let j = 0; j < numbers.length - 1; j++) {
  count++;
  let isSorted = true;
  for (let i = 0; i < numbers.length - 1 - j; i++) {
    count++;
    if (numbers[i] > numbers[i + 1]) {
      let temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;
      isSorted = false
    }
  }
  if (isSorted) break;
};

console.log(numbers);
console.log(count);

