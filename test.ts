// Cloning arrays
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [...arr1];
arr2[0] = 7;

// console.log(arr1);

// Random range

function range(max: number): number {
    return Math.round(Math.random() / (1 / (max - 1)));
}

// console.log(randRange(10));

// Random choice

function choice<T>(arr: Array<T>): T {
    return arr[Math.round(Math.random() / (1 / (arr.length - 1)))];
}

// console.log(choice(arr1));

// Removing elements from arrays

arr1.splice(2);

console.log(arr1);
