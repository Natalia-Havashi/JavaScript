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

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  let carRental = 0;
  if (d < 3) {
    carRental = d * 40;
  } else if (d >= 3 && d < 7) {
    carRental = d * 40 - 20;
  } else if (d >= 7) {
    carRental = d * 40 - 50;
  }
  return carRental;
}
console.log(rentalCarCost(4));

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
var isSquare = function (n) {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt);
};

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
function minMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return [min, max];
}

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s) {
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = 60 * millisecondsInSecond;
  const millisecondsInHour = 60 * millisecondsInMinute;

  return (
    h * millisecondsInHour + m * millisecondsInMinute + s * millisecondsInSecond
  );
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet(name, owner) {
  let hello = "";
  if (name === owner) {
    hello = "Hello boss";
  } else {
    hello = "Hello guest";
  }
  return hello;
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(sheep) {
  const sheeps = sheep.filter((tr) => tr === true);
  return sheeps.length;
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  const vowels = "aeiou";
  return str.split("").filter((letter) => vowels.includes(letter)).length;
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}
