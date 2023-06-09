/* একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

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
}
const result = student.exam();
console.log(result);