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



//---------------------------------------------------------------------------------
//nested functions 

// let username="gagan";
// let userINBOX=0;

// login();

// function login(){
//     Displayusername();
//     DisplayUserINBOX();
//     function Displayusername(){
//         console.log(`welcome ${username}`);
//      }
//      function DisplayUserINBOX(){
//         console.log(`you have ${userINBOX} messages ${username}`);
//     }
// }

//---------------------------------------------------------------------------------
// MAPS in js - holds a key value pair of any data item

// const store=new Map([
//     ["nikki" , 500],
//     ["aayush" , 500],
//     ["aayansh" , 500],
//     ["nikki" , 500],
//     ["jaibro" , 500]
// ]);

// store.forEach((value,key) => console.log(`${key} ${value}`));


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
// -------------------------------------------------------------------

// array for each

// let students=["gagan", "nikki", "aayansh", "ayussh"];
// students.forEach(capitalise);
// students.forEach(print);

// function capitalise(element,index,array){
//     array[index]=element[0].toUppercase() +element.substring(1);
// }

// function print(element){
//     console.log(element);
// }

// -------------------------------------------------------------------
//function expression - function without a name

// let count= 0 ;

// document.getElementById("increase btn").onclick=function(){
//     count +=1;
//     document.getElementById("Mylabel").innerHTML=count;
// }

// document.getElementById("decrease btn").onclick=function(){
//     count -=1;
//     document.getElementById("Mylabel").innerHTML=count;
// }
// function increaseCount(){
//     count +=1;
//     document.getElementById("Mylabel").innerHTML=count;
// }
// function decreasecount(){
//     count -=1;
//     document.getElementById("Mylabel").innerHTML=count;
// }

// -------------------------------------------------------------------

//arrow function=compact altenative to a function expression

// const greeting=(username)=> console.log(`hello ${username}`);
//   greeting("ayshh");
// const percentage=(x,y)=> x / y * 100;
// console.log(`${percentage(120,150)}%`)

// let grades=[10,20,500,40,65];

// grades.sort( (x,y)=>
//      y-x
//  );
// grades.forEach( (element)=>
//     console.log(element)
// )

//---------------------------------------------------------------------------------
//shuffle an array(used for card games)

// let cards = ["a", "2", "3", "4", "5", "6", "7", "8", "9", "j", "q", "k"];

// shuffle(cards);
// console.log(cards);

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randonIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randonIndex];
//     array[randonIndex] = temp;
//   }
// }




