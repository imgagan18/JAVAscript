// // OBJECT ORIENTED PROGRAMMING
// // object- group of proterties and method properties
// const car1= {
//     model:"Mustang",
//     colour:"RED",
//     Year:1984,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("you break on the car");
//     },
// }

// console.log(car1.Year);
// car1.drive();

// const car2= {
//     model:"x6",
//     colour:"RED",
//     Year:2004,

//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("you break on the car");
//     },
// }

// console.log(car2.Year);
// car2.drive();

// // -----------------------------------------------------------------------------

// // classes - blueprint for creating classes

// class player {
//   score = 0;

//   pause() {
//     console.log("you paused the game ");
//   }
//   exit() {
//     console.log("you exited the game ");
//   }
// }

// const player1 = new player();
// const player2 = new player();
// const player3 = new player();
// const player4 = new player();
// const player5 = new player();
// player1.score += 339;

// console.log(player1.score);
// console.log(player2.score);
// player1.pause();
// player1.exit();


// // -----------------------------------------------------------------------------

// // constructors:special method of a class its job is to acpet and assign arguements

// class student{
//     constructor(name,age,gpa){
//       this.name=name;
//       this.age=age;
//       this.gpa=gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`)
//     }
// }
//  const student1=new student("gagan",19,3.7);
//  const student2=new student("pattrick",19,2.7);
//  console.log(student1.name);
//  console.log(student1.age);
//  console.log(student1.gpa);
//  student1.study();

//  console.log(student2.name);
//  console.log(student2.age);
//  console.log(student2.gpa);
//  student2.study();


// // -----------------------------------------------------------------------------

//  class animal {
//   alive = true;
//   eat(){
//     console.log(`this ${this.name} can eat `);
//   }
//   sleep()  {
//     console.log(`this ${this.name} can sleep `);
//   }
// }

// class Rabbit extends animal {
//   name = "rabbit";
//   run() {
//     console.log(`this ${this.name} can run `);
//   }
// }

// class Fish extends animal {
//   name = "fish";
//   swim() {
//     console.log(`this ${this.name} can swim `);
//   }
// }

// class Hawk extends animal {
//   name = "hawk";

//   fly() {
//     console.log(`this ${this.name} can fly `);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.sleep);

// // -----------------------------------------------------------------------------
// // getters and setters 

// class Car{
//     constructor(power){
//         this._gas=100;
//         this._power = power;
//     }
//     get gas(){
//         return`${this._gas} (${this._gas/500*100})%`
//     }
//     get power(){
//        return `${this._power} HP`;
//     }
//    set gas(value){
//      if (value>50){
//         value=50;
//      }
//      else if (value < 0){
//        value=0;
//      }
//      this.gas=value;
//        }
// }

// let car=new Car(400);
// console.log(car.power);
// console.log(car.gas);
