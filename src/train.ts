console.log("what's up?");



function hasProperty(obj: object, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

console.log(hasProperty({ name: "BMW" }, "name"));
console.log(hasProperty({ name: "BMW" }, "color"));




// /// Task P

// function objectToArray(obj: object): [string, any][] {
//     return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));




// function calculateSumOfNumbers(array: unknown[]): number {
//     return array.reduce((sum: number, value: unknown): number => {
//         if (typeof value === "number") {
//             return sum + value;
//         }

//         return sum;
//     }, 0);
// }

// console.log(
//     calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])
// );













/* Project Standards:
  - Logging standards
  - Naming standards:
      function, method, variable => CAMEL
      class => PASCAL
      folder, file => KEBAB
      css => SNAKE
  - Error handling
*/
/* Traditional API
   Rest API
   GraphQL API
   ....
   */
/*
Traditional front-end => BSSR => Ejs
modern fromt-end =>  => SPA=> React
*/






// Task N

function palindromCheck(str: String) {
    return str === str.split("").reverse().join("");
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("hello"));




// interface SquareResult {
//     number: number;
//     square: number;
// }

// function getSquareNumbers(arr: number[]): SquareResult[] {
//     return arr.map((number) => ({
//         number: number,
//         square: number * number,
//     }));
// }

// console.log(getSquareNumbers([1, 2, 3]));
