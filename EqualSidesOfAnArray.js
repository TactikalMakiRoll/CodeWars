function findEvenIndex(arr) {
    let leftHandSum = 0;
    let rightHandSum = arr.reduce((acc, elem) => {
        return (acc += elem);
    });

    for (let i = 0; i < arr.length; i++) {
        rightHandSum -= arr[i];
        if (leftHandSum === rightHandSum) {
            return i;
        }
        leftHandSum += arr[i];
    }
    return -1;
}

console.log(
    findEvenIndex([1, 2, 3, 4, 3, 2, 1]),
    3,
    "The array was: [1,2,3,4,3,2,1] \n"
);
console.log(
    findEvenIndex([1, 100, 50, -51, 1, 1]),
    1,
    "The array was: [1,100,50,-51,1,1] \n"
);
console.log(
    findEvenIndex([1, 2, 3, 4, 5, 6]),
    -1,
    "The array was: [1,2,3,4,5,6] \n"
);
console.log(
    findEvenIndex([20, 10, 30, 10, 10, 15, 35]),
    3,
    "The array was: [20,10,30,10,10,15,35] \n"
);
