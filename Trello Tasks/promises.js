const resolvedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});

resolvedPromise.then((res) => console.log(res));

const rejectedPromise = new Promise((_, reject) => {
  reject(new Error("Promise rejected!"));
});

rejectedPromise.catch((err) => console.error(err.message));
