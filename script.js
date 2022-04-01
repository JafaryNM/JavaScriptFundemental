
/*************************** *
 
* Variables and Datatypes

var firstName='John';
var lastName='Smith';
var age=28;

var fullAge=true;
var job;
job='teacher';

// Variable naming Rules 
 

/*************************** *
 
* Variables Mutations and Type Coercion


var firstName='John';
age=28;
// Type Coercion
var job,isMarried;
job='Teacher';
isMarried='False';

console.log(firstName + 'have'+ age + 'years old'+ 'his job is'+job + 'is he married?'+ isMarried);
// Variable Mutations

age=35;
job='Developer'

// Using alert pop window

alert(firstName + 'have'+ ' ' + age + 'years old'+ 'his job is'+job + 'is he married?'+ isMarried);

// Getting Values to Users
var lastName=prompt('What is first name');
console.log(firstName +' '+lastName);
*/

/**********************************
 * Basic Operators 
 

************************************/

/**********************************
// Math Operators

var ageJafary, ageJohn, currentYear,johnYearOfBirth,jafaryYearOfBirth;
 ageJohn=28;
 ageJafary=27;
 currentYear=2022;
 johnYearOfBirth=currentYear-ageJohn;
 jafaryYearOfBirth=currentYear-ageJafary;

console.log(johnYearOfBirth);
console.log(jafaryYearOfBirth);
console.log(currentYear+2);
console.log(currentYear*2);
console.log(currentYear/10);

// Logic operators

var ageOlder=ageJohn>ageJafary;


// Operator Precedence

var now= 2022;
var yearOfBirthJuly=1997;
var fullAge=18;

var isFullAge=now-yearOfBirthJuly>=fullAge;
console.log(isFullAge);
console.log(ageOlder);

// Typeof operators
var x;
var message='JavaScript for FrontEnd developer';

console.log(typeof ageOlder);
console.log(typeof ageJafary);
console.log(typeof x);
console.log(typeof message);



// Code challenge 1
// Store  Mark and John Variable
var massMark=70; // kg 
var heightMark=1.69;// meter

var massJohn=80; 
var heightJohn=1.78;//meter

// Calculate Mark and John BMI

var bmaMark=massMark*(heightMark* heightMark);
var bmaJohn=massJohn*(heightJohn* heightJohn);

console.log(bmaMark,bmaJohn)


// Comparisons of BMI btn mark and John

var compBMI= bmaMark>bmaJohn;

// Print to console

console.log('is BMI mark\'s is greater than BMI Johns\`s?' +' ' +compBMI);

 
************************************/

/**********************************
 * IF & ELSE STATEMENTS



var firstName='John';
var civilStatus='Single';

// Test civil status 

if(civilStatus==='Married'){

    console.log(firstName + '' + ' ' +'is married');

}
else {
    console.log(firstName + ' ' + ' ' + 'will hopefully will marry soon');
}

// if you have boolen variable already

var isMarried='false';

if(isMarried){
    console.log(firstName + '' + ' ' +'is married');
}
else{
    console.log(firstName + '' + ' ' +'Hopeful will marry soon');
}

************************************/

/**********************************
 * Logic Operator
 

var firstName='John';
var age=16;

if (age<13){
    
    console.log(firstName + ' ' + 'is boy');
}

// age for teenager is between 13 and 20
// age is greate or equal 13 AND not less than 20
else if(age>=13 && age <20){

    console.log(firstName + ' ' + 'is teenager ');
}
// age for young man

else {
  console.log(firstName + '' + 'is a man');
}

************************************/

/**********************************
 * Ternary Operators and Switch Case 
 






var firstName='John';
var age=7;
//Ternary Operator
// if age is greater than 18 you can drink beer 
// else drink juice

age>=18 ? console.log(firstName + ' you can drink beer '):
          console.log(firstName + ' you can drink juice' );


var drinkAge=age>=18? 'beer':'juice';

console.log(drinkAge);


// Switch Case Statements

var job='instructor';

switch(job){
 
    // Multiple Switch Case Statements
    case 'teacher':
        case 'instructor':
        console.log(firstName +' teach how to student how to code ');
        break;
    
    case 'driver':
        console.log(firstName +' is good driver');
        break;
    
    case 'designer':
        console.log(firstName + ' is good UI and UX designer');
        break;
    
    default:
        console.log(firstName + ' does something else');

}

// Switch Based On Comparisons
var age=12;

switch(true){

  case age<13:
      console.log(firstName + ' is boy');
      break;

  case age>=13 && age<20:
      console.log(firstName + ' is teenager');
      break;
    
  case age>=20 && age<30:
      console.log(firstName + ' is young');
      break;

  default:
      console.log(firstName + ' is man')

}
************************************/

/**********************************
 * Truths and Fasly Values & Equality 
 * Operators
 

// fasly values in JavaScript are undefined, 0, '', NaN, null
// True Values not consider to falsy values 

var height;// Type of variable is undefined false
height=23; // Convert to Undefined to true 
heightZero=0; // Return to zero values 

// Appling OR operator to solve problems 
if(heightZero || heightZero===0){
    console.log('Variable is defined')
}
else{
    console.log('Variable is not definded ')
}


// Equality Operators
// In JavaScript First is doing types convert then compared
if (height=='23'){
    console.log('The equal == operator does type coercion');
}

************************************/


/**********************************
 
* Coding Challenge 2
 



var scoreMike=(100+100+100)/3;
var scoreJohn= (100+100+100)/3;
var scoreMary= (100+100+100)/3;
console.log(scoreMike, scoreJohn,scoreMary);

// John to win games should be greater btn Mary and  Mike

if(scoreJohn>scoreMike && scoreJohn>scoreMary){
   console.log('John\'s wins game with '+ scoreJohn +' points');
}
// Mike to win games should be greater btn  John and mary

else if(scoreMike>scoreJohn && scoreMike>scoreMary){
    console.log('Mike\'s wins game with '+ scoreMike +' points');
}

// Mary to win games should be greater than John and mary

else if(scoreMary>scoreJohn && scoreMary>scoreMike){

    console.log('Mary\'s wins game with '+ scoreMary +' points');

}
else{
    console.log('There is draw');
}

************************************/

/**********************************
 Functions
 

************************************/

// Passing argurments and return in functions 


function calcAge(birthYear){

    return 2022-birthYear;

}

function yearUntilRet(year,firstName){
    // calling anaother function

    var age= calcAge(year)
    var ageRet=65- age;

    if (ageRet>=0){

        console.log(firstName + 'Is already retiered');

    }
    else{
        console.log(firstName + ' remain  ' + ageRet + ' years to retiered');
    }
    



}

yearUntilRet(1945, 'Jafary');
















































































 









