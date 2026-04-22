const PI =3.14;

let radius = 3;

let area = radius * radius * PI;

console.log(area);

radius= 20; //change the value of radius
area = radius * radius * PI;
console.log(area);

// Type coercion
const one = 1;
const two = '2';

let result = one * two; // This will concatenate the number and string
console.log(result);

result = one + two; // This will concatenate the number and string
console.log(result);


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block