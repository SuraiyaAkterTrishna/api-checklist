/* সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

/* const person = {
    name: 'John', 
    age: 66, 
    balance: 5000
};
const {balance} = person;
console.log(balance); */

const myArray = [10, 20, 30, 40, 50];

// অ্যারের ডিস্ট্রাকচারিং ব্যবহার করে 'balance' নামক ভেরিয়েবলে ডিস্ট্রাকচার করা
const [, balance, third] = myArray;

// console.log(balance, third);

const woman = {
    name: 'Sadiya', 
    age: 5, 
    money: 500,
};
const {money} = woman;
// console.log(money);

const tour = ['Sajek', 5000, '3 days'];
const [, , day] = tour;
console.log(day);