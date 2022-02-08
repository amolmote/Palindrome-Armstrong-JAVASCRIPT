//console.log('Test');
//console.log(a);           //error
// console.log('test2');

// ode:internal/modules/cjs/loader:936
//   throw err;
//   ^

// Error: Cannot find module 'D:\cdac\skillBharat\new.js'
// [90m    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)[39m
// [90m    at Function.Module._load (node:internal/modules/cjs/loader:778:27)[39m
// [90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)[39m
// [90m    at node:internal/main/run_main_module:17:47[39m {
//   code: [32m'MODULE_NOT_FOUND'[39m,
//   requireStack: []
// }

// console.log('kajal');

// var a;
// a=4;
// a+=2;
// console.log(a);



//variable declaration and printing
/*
var a=100;
var b=200;
var c='amol';
const d=300;  //const can not reassign in constant value 
console.log(a,b,c,d);
*/


//scope of the variables 


function test(c){
    var x=100;
    if(c===1){
        let t=6;
        var s=60;
        x=200;
        console.log(t);  //locally scoped it print 
    }
   // console.log(x);
    //console.log(s);
   // console.log(t);    but not printed outside the function 
}
// test(1);   calling

// types of variables how to get this 
// var a=10;
// var b='amol';
// var c=true;
// var d=10.21;
// var e="sandesh";
// var f=null;
// var g;


/*
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));
*/

//string concatination 
/*
var a=4;
var b="20";
var c=a+b;
console.log(c);
console.log(typeof(c));
*/
/*
//data type conversion

var a=parseInt("10A");   //type  cast  data type changed to number 
var b=parseInt(200);

console.log(a);
console.log(b)

var c='10';
var d='20';

console.log(typeof(a));
console.log(typeof(a+b));
console.log(typeof(c+d));   //read as a string
console.log(parseInt(c)+parseInt(d));  //convert from string to int and addition 

*/

//mathematical operations
/*
var x=10;
var y=3;

console.log(x**y); //square
console.log(x*y);
console.log(x/y);
console.log(x+y);
console.log(x-y);

console.log(x++);
console.log(++x);
console.log(x);
*/

/*

//for loop

for(let i=0;i<10;i++){
    console.log('ans is '+i);
}

*/

/*
data type check
== type not check when compare
=== check data type also while doing comparison

*/

/*
//number and string comparison
var a=10;
var b='10';

if(a===b){
    console.log('yes');
}
else{
    console.log('no');
}
//ans-->>no
//int and float compare it makes type number 

var a=10;
var b=10.00;

if(a==b){
    console.log('yes');
}
else{
    console.log('no');
}

//ans-->yes int & float both are considered as number 

*/
/*
function isArmstrong(c){
    var n = document.getElementById('armstrong').value;

    

     
    var arm=0;
    var rem;
    var temp=n;
    console.log(temp);
    while(temp>0){

      
         rem=temp%10;

        
        arm=arm+(rem*rem*rem);
        temp=parseInt(temp/10);
    }
   
     console.log(arm);
    if(arm==n){
        alert('armstrong number');
    }
    else{
        alert('not armstrong number');
    }
     
}*/

function isArmstrong(){
    var n = document.getElementById('input').value;

    var leng=n.length;

     console.log(leng);
     
    var arm=0;
    var rem;
    var temp=n;
    console.log(temp);
    while(temp!=0){

          let mul=1;
         rem=temp%10;
         
        for(let i=0;i<leng;i++){
            mul=mul*rem
        }
        arm=arm+mul;
        temp=parseInt(temp/10);
    }
   
     console.log(arm);
    if(arm==n){
        alert('armstrong number');
    }
    else{
        alert('not armstrong number');
    }
     
}

function isPalindrome(){
    var num=document.getElementById('input').value;
    var sum=0;
    var rem;
    var temp=num;
    while(num!=0){

          rem=num%10;
          sum=(sum*10)+rem;
          num=parseInt(num/10);
    }
    console.log(sum);
    if(temp==sum){
        document.getElementById('text').innerHTML='number is palindrome';
    }
    else{
        document.getElementById('text').innerHTML='number is not palindrome';
    }

}

  function checkNumber(){
         var options=document.getElementById('dropdown').value;

         if(options.match('armstrong')){
            isArmstrong();
         }
         else{
            isPalindrome();
         }
  }
