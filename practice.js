// var year = 2002
// if(year % 4 === 0){
// console.log("the year is leap year");
// }
// else{
//     console.log("the year is not a leap year");
// }

// *****************************************************************************************
// // short hand /ternary operatords
// var year = 2024;
// console.log((year % 4 === 0)?"the year is leap year":"the year is not a leap year");
// *****************************************************************************************


// switch
// var age1 = 17 
// switch (age1){
//     case 17:
//         console.log("you can not vote");
//         break;
//     case 18:    
//          console.log("you can vote");
//     break;
//     default:
//         console.log("enter a value");
// }


// while loop
// var num = 10
// while(num<= 20){
//     debugger;
//     console.log(num);
//     num++;
// }


// do while 
// var num = 1
// do{
//     console.log(num);
//     num++;
// }while(num<=10);


// for
// for(var num = 1;num<=10;num++){
//     console.log(num);
// }
// var num= 5
// for(var num1= 1; num1<=10;num1++){
//     // console.log(num +" * " + num1 + " = " + (num*num1) );
//     console.log(`${num} * ${num1} = ${num*num1}`);
// }


// function

// function adding(a){
//  return ((a>=18)?"can vote":"can mot vote");
// }
// var vote = adding('17');
// console.log(vote);

// Fat arror function
// const adding = (a) =>((a>=18)?"can vote":"can not vote");
// const vote= adding(17);
// console.log(vote);



// function myFunction(a,b){
//     return a+b;
// }
// console.log(1+2)

// var myFriends = ['a','b','c','d']
// console.log(myFriends[myFriends.length -1]);
// console.log(myFriends[2]);
// console.log(myFriends.length);

// var myFriends = ['a','b','c','d']
// for(var i=0;i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }
// let arr=[2,3,4,5,6,8];
// let arr2= arr.map((curElm)=>curElm*2).filter((curElm)=>curElm>=10).reduce((accumulator,curElm)=>accumulator+curElm);
// debugger;
// console.log(arr2);
let cdate = new Date();
console.log(cdate);