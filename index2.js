// function in js - define once use manytimes 

// startProgram();
 

// function startProgram(){
//     let username = " gagan";
//     var age = "21";

//     HappyBirthday(username, age);
// }


// HappyBirthday();

// function HappyBirthday(username, age){
//     console.log(" happy birthday to you ");
//     console.log(" happy birthday to you  ");
//     console.log(" happy birthday  dear" + username);
//     console.log(" happy birthday  to you");
//       console.log("  you are " , age , "years old lol gay ");
// }

// RETURN STATEMENT 

// let area;
// let width;
// let height;

// width=window.prompt("enter the width");
// height=window.prompt("enter the height ");

// area=getArea(width,height);
// console.log("the area of the given data is " , area);

// function getArea(width,height){
//      let result=width*height;
//      return result;
// }


// variable scope =where a variable is accessible 
// let=limited to block scope 
// var=limited to functions();

// var name="gagan";
// let name="gagan";

// let username="Gagan";
// let items=3;
// let total = 338


// let text = 
// `hello, ${username} <br>
// you have ${items} items in your cart <br>
// and your total is $${total} <br>
// `
//  console.log(text);

// document.getElementById("MyLabel").innerHTML=text;


// toLocalStringMethod

// let MyNumber= .06;

// // MyNumber=MyNumber.toLocaleString("de-DE",{style : "currency" , currency : "EUR"});

// MyNumber=MyNumber.toLocaleString(undefined  , {style:"unit" , unit: "celsius"})
// console.log(MyNumber);



const answer= Math.floor(Math.random ()* 10 + 1);
let guesses = 0  ;

document.getElementById("submitbuton").onclick=function(){

      let guess = document.getElementById("Guessfield").value;
      guesses +=1;

      if(guess==answer){
          alert(`${answer} is the # you selected. It tool you ${guess} guesses to ge the right answer`);
      
        }else if( guess < answer){
      alert(`too small`);
      }
      else{
        alert("too large")
      }
}



