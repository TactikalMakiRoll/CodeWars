// Table where we will get our numbers from. Could be enum in TS
let numberTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function solution(roman) {
    let result = 0;

    // Loop through the numeral
    for (let i = 0; i < roman.length; i++) {
        //get current and next letter in case we need to subtract
        let letter = roman[i];
        let nextLetter = roman[i + 1];
        if (
            numberTable[letter] < numberTable[nextLetter] &&
            nextLetter != undefined
        ) {
            result += numberTable[nextLetter] - numberTable[letter];
            i += 1;
        } else {
            result += numberTable[letter];
        }
    }

    return result;
}

console.log(solution("XXI"));
console.log(solution("I"));
console.log(solution("IV"));
console.log(solution("MMVIII"));
console.log(solution("MDCLXVI"));
