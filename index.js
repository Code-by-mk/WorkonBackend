function printDays(monthNumber) {
    if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 ||
        monthNumber === 7 || monthNumber === 8 || monthNumber === 10 || monthNumber === 12) {
        console.log("31 days");

    } else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {

        console.log("30 days");



    } else if (monthNumber === 2) {
        console.log("31 days");

        console.log("28 or 29 days (leap year dependent");

    } else {
        console.log("Invalid month number. Please enter a number between 1 and 12.");

    }
}

printDays(7);



function EvenOrOdd(number) {
    const result = (number % 2 === 0) ? "The number is even." : "The number is odd.";
    console.log("RESULT is :" + " " + result);

}
EvenOrOdd(7);




//  using switch



function DayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
}


DayOfWeek(8);



const Name = ["mohit", "Rohit", "Amit", "Sumit",];

let text = "";
for (let i = 0; i < Name.length; i++) {
    text += Name[i] + "<br>";
}

console.log(text);




const person = { fname: "Mohit", lname: "saini", age: 23 };

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

console.log(txt);



const car = ["swift", "BMW", "oddi"];

let language = "JavaScript";

let result = "";
for (let x of language) {
    result += x + "<br>";
}

console.log(result);














                        //    Day-5 


                        //    Closures



  function init()
  {
    var name="mohit";

     function display()
       {
        console.log(name);
        }
     display();
   }    

    init();




function setCount() {
    let number = 0;

    return function () {
      console.log(++number);
    };
  }

  const counter = setCount();
  counter();
  counter();





    let counter =0

    function add ()
    {
        counter+=1;
    }

    add();
    add();

   console.log(counter);









            //  Rest parameter

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];


var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);









function num(...digit) {
    return digit;
}

console.log(num(10, 20, 30));



    //   Spread Operator


    function sum(num1, num2 , num3 ) {
        console.log(num1 + num2 + num3 );
    }
    
    let num1 = [1, 3, 4, 5];
    
    
    sum(...num1); 





    const obj = {
        firstname: "mohit",
        lastname: "saini",
    };
    const obj2 = { ...obj };
    console.log(obj2);



    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const combinedArray = [...array1, ...array2];
    console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]





    // Day 7 Array Methods




    let Name = ["Mohit","Rohit","Amit","Sumit","John"];
    let array=Name.length;
        console.log(array);



//    To String() method

console.log(Name.toString());



// AT method

console.log(Name.at(3));




// Join Method

let number=[2,4,6,8,9]
let arr=number.join("#");
console.log(arr);


// pop() method


let number =[12,8,5,3,7,15,23];
let newnum=number.pop();
console.log(newnum);
console.log(number);


// push()


let number =[12,8,5,3,7,15,23];
let arr=number.push(22);
console.log(arr);
console.log(number);


// shift() & unshift() & delete

let fruits = ["Banana", "Orange", "Apple", "Mango"];
  let newarr=fruits.shift();
  console.log(fruits);


      

let newarr=fruits.unshift("lemon");
  console.log(newarr);




let newarr=delete fruits[0];
  console.log(fruits);
  console.log(newarr);


// cancat()


let num1=[1,2];
let num2=[3,4,5,6]
let num3=[7,8]
let arr=num1.concat(num2,num3);
console.log(arr);


let Names=["mohit","Rohit","sumit"]

let newarr=Names.concat("amit");

console.log(newarr);


// CopyWithin()

const arr1= ["Banana", "Orange", "Apple", "Mango"];
const newarry=arr1.copyWithin(2,0);;
console.log(newarry);



// flat() method 

const myArr = [[1,2,3],[3,4,[2,1]],[5,6,7,8]];
const newArr = myArr.flat(2);
console.log(newArr);


// splice

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const newarry=fruit.splice(2,0,"lemon","orange");

console.log(newarry);
console.log(fruit);


// slice
/const newarry=fruit.slice(2);
console.log(newarry);


// to spliced
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

console.log(spliced);



// filter() method



const ages = [25, 30, 35, 40, 45, 50, 55, 60, 65, 75, 70];

const check = () => {
    const filteredAges = ages.filter(age => age > 35);
    console.log(filteredAges); 
};

check();


// find


const ages = [3, 10, 18, 20];

console.log(ages.find(checkAge));

function checkAge(age) {
  return age > 18;
}


//  reduce

const numbers = [1, 2, 3, 4,5,7];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


// map method


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);




// for each

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

console.log(text);
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}











