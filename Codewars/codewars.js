// Ваше завдання — створити функцію, яка виконує чотири основні математичні операції.
// Функція повинна приймати три аргументи - операція (рядок/символ), значення1 (число), значення2 (число).
// Функція повинна повернути результат чисел після застосування вибраної операції.
// Приклади (Оператор, значення1, значення2) --> вихід
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//Рішення:
function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

// опис:
// Реалізуйте функцію, яка додає два числа та повертає їхню суму в двійковому вигляді. Перетворення можна виконати до або після додавання.
// Повернуте двійкове число має бути рядком.
// Приклади: (Input1, Input2 --> Output (пояснення)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//Рішення:
function addBinary(a, b) {
  const num = a + b;
  return num.toString(2);
}

// опис:
// Завершіть метод, який приймає логічне значення та повертає "Yes"рядок для true, або "No"рядок для false.

//Рішення:
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

// опис:
// Це досить просто. Ваша мета — створити функцію, яка видаляє перший і останній символи рядка. Вам надається один параметр, вихідний рядок. Вам не потрібно турбуватися про рядки з менш ніж двома символами.

//Рішення:
function removeChar(str) {
  if (str.length >= 2) {
    return str.substring(1, str.length - 1);
  }
}

// опис:
// Ви знайдете голку в стозі сіна?
// Напишіть функцію findNeedle(), яка приймає arrayповне сміття, але містить одне"needle"
// Після того, як ваша функція знайде голку, вона має повернути повідомлення (у вигляді рядка), яке говорить:

// "found the needle at position "плюс indexвін знайшов голку, отже:

//Рішення:
function findNeedle(haystack) {
  const target = "needle";
  const value = haystack.indexOf(target);
  return `found the ${target} at position ${value}`;
}

// опис:
// Створіть просту функцію під назвою greet, яка повертає найвідоміше "hello world!".
function greet() {
  return "hello world!";
}

// опис:
// Доповніть рішення так, щоб воно перевернуло переданий у нього рядок.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  return str.split("").reverse().join("");
}

// Description:
// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data) {
  const output = data.map((member) => {
    const [age, handicap] = member;
    return age >= 55 && handicap > 7 ? "Senior" : "Open";
  });
  return output;
}

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((acc, currentValue) => {
    return acc + currentValue;
  }, 0);
  const sumClass = sum / classPoints.length;
  if (sumClass < yourPoints) {
    return true;
  } else {
    return false;
  }
}

// Напишіть функцію, яка обчислює середнє значення чисел у заданому масиві.

// Примітка. Порожні масиви мають повертати 0.
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum / array.length;
}
