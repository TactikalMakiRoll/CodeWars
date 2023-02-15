/*
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) I
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.) I
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions inside the array's object)
*/

const dogs = [
    {
        weight: 22,
        curFood: 250,
        owners: ["Alice", "Bob"],
    },
    {
        weight: 8,
        curFood: 200,
        owners: ["Matilda"],
    },
    {
        weight: 13,
        curFood: 275,
        owners: ["Sarah", "John"],
    },
    {
        weight: 32,
        curFood: 340,
        owners: ["Michael"],
    },
];

// 1.
console.log("1.");
dogs.map((dog) => {
    dog.recommendedFood = dog?.weight * 0.75 * 28;
});
console.log(dogs);

// 2.
console.log("2.");
const sarahDog = dogs.find((dog) => {
    return dog.owners.includes("Sarah");
});
if (sarahDog?.curFood > sarahDog?.recommendedFood) {
    console.log("Sarah's dog eats too much");
} else if (sarahDog?.curFood < sarahDog?.recommendedFood) {
    console.log("Sarah's dog eats too little");
} else {
    console.log("Sarah's eat's just right");
}

// 3.
console.log("3.");
const ownersEatTooMuch = dogs.filter((dog) => {
    return dog?.curFood > dog?.recommendedFood;
});

const ownersEatTooLittle = dogs.filter((dog) => {
    return dog?.curFood < dog?.recommendedFood;
});
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log("4.");
let littleResult = "";
for (let i = 0; i < ownersEatTooLittle.length; i++) {
    if (i !== 0) {
        littleResult += " and ";
    }
    let ownerCompiledList = ownersEatTooLittle[i].owners.join(" and ");
    littleResult += ownerCompiledList;
}
littleResult += "'s dogs eat too little!";
console.log(littleResult);

let muchResult = "";
for (let i = 0; i < ownersEatTooMuch.length; i++) {
    if (i !== 0) {
        muchResult += " and ";
    }
    let ownerCompiledList = ownersEatTooMuch[i].owners.join(" and ");
    muchResult += ownerCompiledList;
}
muchResult += "'s dogs eat too much!";
console.log(muchResult);
// could be done with a function instead

// 5.
console.log("5.");
let eatsExact = false;
for (let i = 0; i < dogs.length; i++) {
    if (dogs.recommendedFood === dogs[i].curFood) {
        eatsExact = true;
        break;
    }
}
console.log(eatsExact);

// 6 and 7.
console.log("6.");
const okayDogs = dogs.filter((dog) => {
    return Math.abs(dog.curFood - dog.recommendedFood) < 10;
});
console.log(okayDogs);

// 8.
const dogsSortedByRecommended = [...dogs].sort((dog, nextDog) => {
    return dog.recommendedFood - nextDog.recommendedFood;
});
console.log(dogsSortedByRecommended);
