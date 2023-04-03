/*===== Part 1=====*/
//1. What is the primary difference between synchronous and asynchronous programming in JavaScript?
// - By using asynchronous programming, you can request and retrieve multiple data without waiting other tasks to be finished. On the other hand, a synchronous programming runs each line of the code by order and you need to wait until each task is finished.

//2. Why is this useful?
//-Because we don't have to wait each request to be called if we have a lot of data that we need to retrieve.

//3. What problems does it solve?
// - by using an asynchronous programming, you can request and retrieve big data while other tasks are running. JS can process quicker.

// console.log('first');

// setTimeout(() => {
//   console.log('second');
// },0);

// console.log('third');

//result: first, third, second 
//note: Asynchronous JS will always run after all Synchronous JS


/*===== Part 2=====*/

// type-one(async and await)
// const test = async () => {
//   console.log(1);
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 0);
//   })
// }
// const main = async () => {
//   await test();
//   console.log(3);
// }
// main();

//type-two(without async)
// const test = () => {
//   console.log(1);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 2000);
//   })
// }
// const main = async () => {
//   await test();
//   console.log(3);
// }
// main();

//type-three(without async/await)
// const test = () => {
//   console.log(1);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 2000);
//   })
// }
// const main = () => {
//   test().then(() => {
//     console.log(3);
//   });
// }
// main();

//type-four(async and await)
// async function callApi() {
//   const res= await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users);
// }
// callApi();

// function callApi() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function(users) {
//     console.log(users);
//   });
// }
// callApi();

// function callApi() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.onload = function() {
//     console.log(xhr.response);
//   }
// }
// callApi();

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
// .then((response) => {
//   if(!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`);
//   }
//   return response.json();
// })
// .then ((data) => {
//   console.log(data[0].name);
// });

// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
// .then((response) => {
//   if(!response.ok) {
//     throw new Error(`HTTP error: ${response.status}`);
//   }
//   return response.json();
// })
// .then((data) => {
//   console.log(data[0].name);
// })
// .catch((error) => {
//   console.log(`Could not get products: ${error}`);
// });

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
// .then((responses) => {
//   for (const response of responses) {
//     console.log(`${response.url}: ${response.status}`);
//   }
// })
// .catch((error) => {
//   console.log(`Failed to fetch: A${error}`);
// })

async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    if(!response.ok) {
      throw new Error (`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
  }
  catch (error) {
    console.log(`Could not get products: ${error}`);
  }
}
fetchProducts();