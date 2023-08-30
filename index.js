// console.log("hello world")

// let age =21; //numbers
// let Firstname="gagan";//strings
// let student=true;//boolean

// console.log(age);
// console.log(Firstname);
// console.log(student);

// document.getElementById("p1").innerHTML="Hello  " + Firstname;
// document.getElementById("p2").innerHTML="you are  " + age + "years old";
// document.getElementById("p3").innerHTML="student :" + student ;

// let result = 10+3*(4-5);
// console.log(result);

// let username= window.prompt("what is your nanme");

// console.log(username);

// let username;

// document.getElementById("myButton").onclick = function(){
//     username=document.getElementById("myText").value;
//     console.log(username);

//     document.getElementById("MyLable").innerHTML="hello " +username;
// }

// let age=window.prompt("how old are you");
// console.log(typeof age);
// age=Number(age);
// console.log(typeof age);
// age=age+1;
// console.log("hello you are " , age, "years old")

// const pi=3.1443;
// let radius;
// let circumference;

// radius=window.prompt("enter the radius");
// radius=Number(radius);

// circumference= 2*radius*pi;

// console.log("the radius of the circle is " + circumference)

//to find the c=underroot a^2 + b^2;

// let a;
// let b;

// document.getElementById("Abutton").onclick=function(){
//     a=document.getElementById("aTextbox").value;
//     a=Number(a);
//     b=document.getElementById("bTextbox").value;
//     b=Number(b);
//     c = Math.sqrt( Math.pow(a,2) + Math.pow(b,2));
//         console.log("the hypthoenses of the given is as follows" + c);

//         document.getElementById("cLabel").innerHTML=" side c " + c;
// }

//an oinline number counter

// let count =0;

// document.getElementById("DecreaeBTN").onclick=function(){
//     count-=1;
//     document.getElementById("countlabel").innerHTML=count;
// }

// document.getElementById("incBTN").onclick=function(){
//     count+=1;
//     document.getElementById("countlabel").innerHTML=count;
// }

// document.getElementById("resetBTN").onclick=function(){
//     count=0;
//     document.getElementById("countlabel").innerHTML=count;
// }

// let x=Math.floor(Math.random() *  3993939)+ 1;
// console.log(x);

// CONSTANT
// let username="gagan shenvi";
// let PhoneNuber="123-456-7765";
// console.log(username.length);
// console.log(username.charAt(3));

// PhoneNuber=PhoneNuber.replace("-" ,"");

// console.log(PhoneNuber)

//SLICE METHOD
// let Fullname = "Gagan Shenvi";
// let Firstname;
// let lastname;
// Firstname=Fullname.slice(0,5);
// lastname=Fullname.slice(6);

//  console.log(lastname);
//  console.log(Firstname);

//METHOD CHANING -calling one method afther another in the same line of code.

// if else statements in js

// let age=18;

// if (age >=18){
//     console.log("you are an adult ")
// }

// this is a where we learn about checked property

// document.getElementById("mycheckbox2").onclick=function(){
//     const mycheckbox1=document.getElementById("mycheckbox1")
//     if(mycheckbox1){
//        console.log("you have been subscribed")
//     }else{
//         console.log("please try again")
//     }
// }

// SWITCH CASE
// let grade = "A";

// switch (grade) {
//   case "A":
//     console.log("you did good");
//     break;
//   case "b":
//     console.log("you did ok");
//     break;

//   case "c":
//     console.log("you passesd");
//     break;

//   case "d":
//     console.log("you bad");
//     break;
//   case "f":
//     console.log("you very bad");
//     break;

//     default:
//         console.log(grade,"it is not a letter ");
// }

// AND OR logical operators

// let temp = 1;

// if(temp > 0 && temp <15){
//     console.log("the weather is perfect")
// ;}

// do - WHILE LOOPS( do something first then check the condition)
// let username = "";
// do{
//     username=window.prompt("enter your name ");

// }
// while(username=="" || username == null){
// }

// console.log(" hello " + username);

// for loops

// for (let i =10; i>0; i-=1 ){
//     console.log(i);
// }

// console.log("happy new year ")

// break and continue statement

// for (let i = 0; i < 20; i += 1) {
//   if (i == 13) {
//     continue;
//   }
//   console.log(i);
// }


//nested loops 
// let symboll= window.prompt("enter the symboll to use");
// let rows= window.prompt("enter the number of rows");
// let colums=window.prompt("enter the number of columsn");

// for(let i = 1 ; i <= rows; i+=1){
//     for(let j=0;j<=colums ; j+=1){
//         document.getElementById("My Rectangle").innerHTML +=symboll;
//     }
//     document.getElementById("My Rectangle").innerHTML += "<br>"
// }






