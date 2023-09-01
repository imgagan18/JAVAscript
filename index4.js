// 1 d and 2 d  array in JS:  ---------------------------------------------------------------

// let fruits=["apple","banana","cake","pp"];

// fruits[2]="coconut"; chaneg value in element
// fruits.push("gagan");// to push any element in the aray 
// fruits.pop(); // to remove any element from the array 
// fruits.unshift("unkaki"); // add element to the first of the element
// fruits.shift();//removes the element

// let length = fruits.length;
// let index=fruits.indexOf("pp");
// console.log(index);

// -----------------------------------------------------------------------------------------------

// loop thorugh an array ;

// let prices=[2,4,5,7,8];
//  for( let i = prices.length-1 ; i >= 0 ; i -=1){
//      console.log(prices[i]);
//  }


// let fruits=["apple", "banana","strawberry", "pineapple" ];

// // fruits=fruits.sort();
// fruits=fruits.sort().reverse();
// for (let fruit of fruits){
//     console.log(fruit);
// }


// 2 d array

// let fruits=["apple" ,"banana", "grapes" ];
// let vegetable=["onion", "carrot", "chilli"];
// let meat=["chicken" , "fish", "eggs"];

// let grocerylist=[fruits, vegetable, meat];

// grocerylist[0][0]= "mangoes";

// for(let list of grocerylist){
//     for(let food of list){
//      console.log(food);
//     }
// }

// -----------------------------------------------------------------------------------------------

//spread operator

// let numbers=[2,3,4,8787,6,7,8,9];

// let maximun=Math.max(...numbers);
// console.log(maximun);

// let class1=["gagan", "joe", "dhruv karai"];
// let class2=["aayansh" , "ravi", "ayussh", "nikki"];

// class1.push(...class2);

// console.log(class1);

// -----------------------------------------------------------------------------------------------

// Rest parameters=function accepting any number of parameters

let a=1;
let b=3432;
let c=43444;
let d=22;
let e=6;
let f=4;


console.log(sum(a,b,c,d,e));

function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total +=number
    }
   return total;
}



