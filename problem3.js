/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */

const number = () => {
    return 89;
}
// console.log(number());

/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। */ 

const dividedBySeventeen = (a) => {
    const result = a/17;
    return result;
}
const output = dividedBySeventeen(1700);
// console.log(output);

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */

const calculation = (first, second) => {
    const add = first + second; 
    const result = add / 2;
    return result;
};
const output2 = calculation(10, 20);
console.log(output2);
