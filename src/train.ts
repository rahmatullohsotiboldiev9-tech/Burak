console.log("what's up?");

function calculate(expression: string): number {
    const numbers = expression.split("+").map((item): number => {
        const number = Number(item.trim());

        if (Number.isNaN(number)) {
            throw new Error("Noto‘g‘ri son");
        }

        return number;
    });

    return numbers.reduce((sum: number, number: number): number => sum + number, 0);
}

console.log(calculate("1 + 3"));
console.log(calculate("10 + 20 + 5"));









// function hasProperty(obj: object, prop: string): boolean {
//     return Object.prototype.hasOwnProperty.call(obj, prop);
// }

// console.log(hasProperty({ name: "BMW" }, "name"));
// console.log(hasProperty({ name: "BMW" }, "color"));




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




















// Task N

function palindromCheck(str: String) {
    return str === str.split("").reverse().join("");
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("hello"));




