/* একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

const student = {
    name: "Motin Mia", 
    age: 50,
    address: {
        city: 'Sadar Jessore',
        district: 'Jessore',
        division: 'Khulna', 
        postCode: 7400,
        country: 'Bangladesh',
    },
    food: ['beriany', 'Polau', 'Pizza', 'Burger', 'Pepsi', 'Black coffee'],
    exam: function (){
        return `${this.name} has passed in the exam from ${this.address.district}`;
    }
};
const output = `${student.address.district}, ${student.address.country} is an wonderful city. I love the food ${student.food[1]}`;
console.log(output);