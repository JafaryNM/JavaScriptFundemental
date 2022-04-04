
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
 

// function Declarations
// Passing argurments and return in functions 


function calcAge(birthYear){

    return 2022-birthYear;

}

function yearUntilRet(year,firstName){
    // calling anaother function

    var age= calcAge(year)
    var ageRet=65- age;

    if (ageRet<=0){

        console.log(firstName + ' is already retiered');

    }
    else{
        console.log(firstName + ' remain  ' + ageRet + ' years to retiered');
    }
    



}

yearUntilRet(1945, 'Jafary');

************************************/

/**********************************

 * Fuction  Expression
 


// Function expression
// Expression is piece of code which gives values

var whatYouDo=function(firstName, job){

    switch(job){
     

        // if you using return means you dont need break
        // return will break automatically if condition is true

        case 'teacher':
            return firstName + ' is good Teacher ';
            
        case 'designer':
            return firstName + ' is good Website Designer';
            
        case 'engineer':
            return firstName + ' is good Electrical Engineer ';
        
        default:
            return firstName + ' is does something else';


    }

}
var jafaryJob=whatYouDo('Jafary','teacher');
var johnJob=whatYouDo('Jafary','designer');
console.log(jafaryJob);
console.log(johnJob);

************************************/
/**********************************
 * Arrays
 

// Array initialization

var names=['Jafary','John','Isaac'];

// Creating Arrays Using array method

var students= new Array('Innocent', 'Jafary', 'Reginar');


// Access elements in arrays

console.log(students);
// Arrays is zero based

console.log(students[0]);

// Array length

console.log(students.length);

// Insert Elements in particula elements

students[1]='Methew';

console.log(students);

// Add element to non existing elements 
// Empty element will be added into array elements

students[5]='Juliana';

console.log(students);

// Add last elemnts in arrays

// find last lenght of an arrays

console.log(students.length);

// put value of length inside index elements

students[students.length]='Wanchota';

console.log(students);

// Differents Datatypes

var john=['John', 'Victor', 1995, 'Teacher', false];

// Array Methods
// Add element last on an arrays

john.push('blue');

console.log(john);

// Adding element at begginings

john.unshift('Mr');

console.log(john);

// Remove last element into arrays

john.pop();

console.log(john);

// Remove first element into arrays

john.shift();

console.log(john);

// Return index position 

console.log(john.indexOf('John'));
console.log(john.indexOf(2002));

// Trick to use indexOf Method to find position of an element

var johnIsTeacher=john.indexOf('Teacher')===-1? 'John is not teacher':'John is teacher';
console.log(johnIsTeacher);


************************************/


/**********************************
 * Coding Challenge 3
 



function tipCalculator(bill){

    var parcentage;
    if(bill<50){
        parcentage=0.2;
    }
    else if(bill>=50 && bill<200){
        parcentage=0.15;

    }
    else{
        parcentage=0.10;
    }

    return parcentage*bill;

}

var bills=[124,48,268];
var tips=[tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
var finalValue=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(tips , finalValue);
************************************/

/**********************************
 * Object and Properties
 

//Object literal declaration
var john={
    firstName:'John',
    lastName:'Victor',
    yearOfBirth:1990,
    family:[
        'Methew','Juliana','Paul'
    ],
    job:'teacher',
    isMarried:false,
};

console.log(john)

// Access Value in arrays using dot notation

console.log(john.firstName);

// Acess using bracket notation using string values

console.log(john['lastName']);

// Advantages of bracket notation access values

var year='yearOfBirth';
console.log(john[year]);

// Mutated data into an object

john.job='engineer';
john['isMarried']=true;
console.log(john);

// Create new object

var jafary= new Object()
jafary.firstName='Jafary';
jafary.lastName='Mdegela';
jafary.isMarried=false;
jafary.yearOfBirth=1990;
jafary.job='Software Engineer';
console.log(jafary)
/**********************************
 * Object and Properties
 

************************************/



/**********************************
 * Object and Methods
 

************************************/

var john={
    firstName:'John',
    lastName:'Victor',
    yearOfBirth:1995,
    family:[
        'Methew','Juliana','Paul'
    ],
    job:'teacher',
    isMarried:false,

    calcAage:function(){
      
        // Access using this keyword
     
       this.age= 2022- this.yearOfBirth;


    }




};

console.log(john)

// Stored in variable

var ageJohn=john.calcAage();
console.log(ageJohn);






































































































































































































 









