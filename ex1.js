/*
 Looping Triangle
 https://eloquentjavascript.net/02_program_structure.html
 Ex. nr.1
*/

// LT using do while loop
let triangle = "#";
let counter = 0;

do {
  console.log(triangle);
  triangle += "#";
  counter += 1;
} while(counter < 7)

// LT using for loop
let triangle = "#";

for (let counter = 0; counter < 7; counter += 1) {
  console.log(triangle)
  triangle += "#";
}

// LT using while loop
counter = 0;
let triangle = "#";

while (counter < 7) {
  console.log(triangle)
  triangle += "#";
  counter++;
}
