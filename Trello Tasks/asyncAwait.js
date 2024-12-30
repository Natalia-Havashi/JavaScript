// Створіть асинхронну функцію, яка повертає "Hello, World!" через 1 секунду.

// Викличте цю функцію і виведіть результат в консоль.

// Використовуйте try/catch для обробки помилки в асинхронній функції, яка кидає помилку.

const sayHello = async function () {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello World");
        // reject(new Error("ERROR"));
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
};
sayHello()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
