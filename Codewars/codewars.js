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

// Завершіть функцію, яка приймає параметр рядка та скасовує кожне слово в рядку. Усі пробіли в рядку мають бути збережені.

// Приклади
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
  const nums = numbers.split(" ").map(Number);
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return `${max} ${min}`;
}

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  const averageValue = (s1 + s2 + s3) / 3;

  if (averageValue >= 90 && averageValue <= 100) {
    return "A";
  } else if (averageValue >= 80 && averageValue < 90) {
    return "B";
  } else if (averageValue >= 70 && averageValue < 80) {
    return "C";
  } else if (averageValue >= 60 && averageValue < 70) {
    return "D";
  } else if (averageValue >= 0 && averageValue < 60) {
    return "F";
  }
}

// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
function removeSmallest(numbers) {
  if (numbers.length === 0) return [];

  const smallNum = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, i) => i !== smallNum);
}

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
function century(year) {
  return Math.ceil(year / 100);
}
