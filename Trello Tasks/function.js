// Напишіть функцію, яка приймає два числа і повертає їх суму.
function sum(num1, num2) {
  return num1 + num2;
}

// console.log(sum(5, 3));

// Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.
function string(str) {
  return str.toUpperCase();
}

// console.log(string("hello my friends"));

// Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.
function array(array) {
  return array.map(function (num) {
    return num * num;
  });
}

// console.log(array([1, 2, 3, 4, 5]));

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// console.log(countSheep(1));
// console.log(countSheep(5));
