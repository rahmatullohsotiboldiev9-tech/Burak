console.log("Hello John bro!");

interface SquareResult {
    number: number;
    square: number;
}

function getSquareNumbers(arr: number[]): SquareResult[] {
    return arr.map((number) => ({
        number: number,
        square: number * number,
    }));
}

console.log(getSquareNumbers([1, 2, 3]));
