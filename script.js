
/*************************** *
 
* Variables and Datatypes

var firstName='John';
var lastName='Smith';
var age=28;

var fullAge=true;
var job;
job='teacher';
*/

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

/**
 * Basic Operators 
 */

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


console.log(ageOlder);

// Typeof operators
var x;
var message='JavaScript for FrontEnd developer';

console.log(typeof ageOlder);
console.log(typeof ageJafary);
console.log(typeof x);
console.log(typeof message);




















































