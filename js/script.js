// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
//  সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে।
//  array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

/* let names= ['khokon','rahim','karim','jadhu','madhu'];

let element = names.length;
console.log(element);

let fifth = names[4]

console.log(fifth);

names['4']='bristi';

names.push('shima','raka');
names.pop();

console.log(names); */


// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে।
//  সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 


// let names= ['khokon','rahim','karim','jadhu','madhu'];

// for(let i = 0; i<names.length; i++){
//     let element = names[i];
//     console.log(element);
// }


// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে
//  সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 


/* 
let numbers =[123,54,34,67,98,89,23,234];

for(let i = 0; i<numbers.length; i++){
    if(numbers[i]<=80){
        continue;
    }
    console.log(numbers[i]);
} */

// Same example =========================
/* 
let numbers =[123,54,34,67,98,89,23,234];

let geterThan80 =[];

for(let i =0; i<numbers.length; i++){

if(numbers[i]>80){
    geterThan80.push(numbers[i]);
}

}
console.log(geterThan80); */

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে।
//  যদি পারো তাহলে সেই কোড লিখে ফেলো। 

/* function multiApplication(num){
    multi = 1;
    for(let i =0; i<num.length; i++){
        const element =num[i]
        multi= multi * element;
    }

    return multi;
}


const numbers =[123,54,34];
const result =multiApplication(numbers);
console.log(result); */

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।


/* const man ={
    name:"khokon",
    age: 24,
    post:"bachamar"
}

man.age=30;

console.log(man); */



// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : ================================

// সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch ।
//  অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 


/* function feetToInch(feet){
    const result = feet*12;
    return result;

}

const feets = 50;
const inch =feetToInch(feets)

console.log(inch); */

// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে।
// এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

/* function centimeterToMeter(centimeters) {
    const meters = centimeters / 100;
    return meters;
}

const centimeterValue = 5;
const meterResult = centimeterToMeter(centimeterValue);
console.log(meterResult);
 */

//  Mone koro tomader birani dewa hobe,er jonno tomader kach theke tomader list chawa holo..Tomra tomader namer list
//  dile ,kintu biranir love liste tomader nam duibar kore dicho, Ekhon ami just ekta programe kormu 
//  jekhane duplicate nam gulo liste jenop ekbar kore show kore 


/* function removeDuplicate(names){
const unique =[];
    for(let i =0; i<names.length; i++){
    const name =names[i];

    if(unique.includes(name)===false){
        unique.push(name);
    }

    }

    return unique;
}

const namesAll= ['khokon','rahim','karim','jadhu','madhu','khokon','rahim','karim','jadhu','madhu'];
const uniqueNames =removeDuplicate(namesAll);
console.log(uniqueNames); */



// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে 
// তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও।
//  সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। 
// অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// এইবার ভালো করে খেয়াল করো। 
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে।
//  সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। 
//  আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

/* function paperRequirements(firstBookCopies, secondBookCopies, thirdBookCopies) {
    const pagesPerFirstBook = 100;
    const pagesPerSecondBook = 200;
    const pagesPerThirdBook = 300;

    const totalPaper = (firstBookCopies * pagesPerFirstBook) + 
                       (secondBookCopies * pagesPerSecondBook) + 
                       (thirdBookCopies * pagesPerThirdBook);

    return totalPaper;
}

const totalPages = paperRequirements(2,3,6);

console.log(totalPages); */

// Cheapest price ber korte hobe -===========================================
/* const phones = [
    { brand: "nokia", camera: 12, storage: "32gb", price: 32000, color: "silver" },
    { brand: "walton", camera: 12, storage: "32gb", price: 23000, color: "silver" },
    { brand: "samsang", camera: 12, storage: "32gb", price: 42000, color: "silver" },
    { brand: "xaomi", camera: 12, storage: "32gb", price: 22000, color: "silver" },
    { brand: "redmi", camera: 12, storage: "32gb", price: 12000, color: "silver" },
];

function cheaPestPhone(phones) {
    let cheap = phones[0]; // Initialize with the first phone

    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheap.price) {
            cheap = phone;
        }
    }

    return cheap;
}

const mySelection = cheaPestPhone(phones);
console.log(mySelection); */

// Mone koro tumi shopping korte gecho ,Tar total cost ber korte hobe-------------------

/* const myShopping = [
    {name:"shirt",price:300},
    {name:"tShirt",price:200},
    {name:"shoo",price:500},
    {name:"towser",price:2000},
];

function shoppings(myShopping){

    let totalcost =0;
    for(let i =0; i<myShopping.length; i++){
        const shopping = myShopping[i];
        totalcost = totalcost + shopping.price;
    
    }

    return totalcost;
}

const totalShopping =shoppings(myShopping);
console.log(totalShopping); */

// Quantity price,,mANE EKADHIK PONNO NILE TAR TOTAL COST BER KORAR PROGRAMME----------------------------

/* const myShopping = [
    {name:"shirt", price:300, quantity:5},
    {name:"tShirt", price:200, quantity:2},
    {name:"shoo", price:500, quantity:4},
    {name:"towser", price:2000, quantity:2},
];

function shoppings(myShopping){

    let totalcost =0;
    for(let i =0; i<myShopping.length; i++){
        const shopping = myShopping[i];

        const total = shopping.price * shopping.quantity
        totalcost = totalcost + total;
    
    }

    return totalcost;
}

const totalShopping =shoppings(myShopping);
console.log(totalShopping); */

// Mone koro tumi sinema dekhte jabe ,to obosshoi ticket kinte hobe .per ticket price 100 tk.
// 100 ticket nile dam 100 kore proti pic.jodi 100 er upore but 200 er niche nile ticket price 90.yobe prothom 100 er dam 
// 100tk..abar 200 er upore nile segular dam 70 tk kore.. tahole ami jodi 230 ta ticket nei tar dam koto?

/* function ticketPrice(ticketQuantity){
const first100Rate =100;
const second100Rate =90;
const restTicket = 70;

if(ticketQuantity<=100){
  const price = ticketQuantity*first100Rate;
  return price;
}
else if(ticketQuantity<=200){

const first100Price = 100*first100Rate;
const restTicketQuantity = ticketQuantity-100;
const restTicketPrice = restTicketQuantity*second100Rate;
const totalPrice =first100Price+restTicketPrice;
return totalPrice;
}

else{
    const first100Price =100*first100Rate;
    const second100Price =100*second100Rate;
    const restTicketQuantity =ticketQuantity-200;
    const restTicketPrice =restTicketQuantity*restTicket;
    const totalCosst = first100Price+second100Price+restTicketPrice;
    return totalCosst;
}
}

const ticketNeed = ticketPrice(230);
console.log(ticketNeed); */


// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে।
// সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম
// রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

/* function bestFriend(arry) {
    let longestWord = "";
    for (let i = 0; i < arry.length; i++) {
        const name = arry[i];
        if (name.length > longestWord.length) {
            longestWord = name;
        }
    }
    return longestWord;
}

const arry = ["khokon", "shoikot", "jubayer", "Alam", "proshanto"];

const bigFriend = bestFriend(arry);
console.log(bigFriend); */

// এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর 
// একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন 
// একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। 
// এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


function positiveNumber(number) {
let positive =[];
 
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
        if(num>=0){
            positive.push(num);
        }
        else{
            break;
        }
        
    }

    return positive;

}

const number = [12,34,546,-65,45,43,65,67];

const numbers = positiveNumber(number);
 console.log(numbers);
















