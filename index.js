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