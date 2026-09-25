console.log("Whats up?");

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
