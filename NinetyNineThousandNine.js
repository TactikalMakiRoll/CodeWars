let wordToTwenty = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

let dozenWords = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

let result = [];

const numberToEnglishBeforeHundred = (n) => {
    if (n >= 0 && n <= 19) {
        result.push(wordToTwenty[n]);
    }

    if (n >= 20 && n <= 99) {
        result.push(dozenWords[Math.floor(n / 10)]);
        n % 10 === 0 ? "" : result.push(wordToTwenty[n % 10]);
    }
};

const numberToEnglishBeforeThousand = (n) => {
    Math.floor(n / 100) === 0
        ? ""
        : result.push(wordToTwenty[Math.floor(n / 100)]) +
          result.push("hundred");
    n % 100 === 0 ? "" : numberToEnglishBeforeHundred(Math.floor(n % 100));
};

const numberToEnglish = (n) => {
    result.length = 0;
    //your code here
    if (n < 0 || !Number.isInteger(n)) {
        return "";
    }

    if (n >= 0 && n <= 99) {
        numberToEnglishBeforeHundred(n);
    }

    if (n >= 100 && n <= 999) {
        numberToEnglishBeforeThousand(n);
    }

    if (n >= 1000 && n <= 100000) {
        numberToEnglishBeforeHundred(Math.floor(n / 1000));
        result.push("thousand");
        numberToEnglishBeforeThousand(n % 1000);
    }

    console.log(result);
    return result.join(" ");
};

console.log(numberToEnglish(0), "zero");
console.log(numberToEnglish(7), "seven");
console.log(numberToEnglish(11), "eleven");
console.log(numberToEnglish(20), "twenty");
console.log(numberToEnglish(47), "forty seven");
console.log(numberToEnglish(100), "one hundred");
console.log(numberToEnglish(305), "three hundred five");
console.log(numberToEnglish(4002), "four thousand two");
console.log(numberToEnglish(4560), "four thousand five hundred sixty");
console.log(numberToEnglish(3892), "three thousand eight hundred ninety two");
console.log(numberToEnglish(6800), "six thousand eight hundred");
console.log(numberToEnglish(14111), "fourteen thousand one hundred eleven");
console.log(numberToEnglish(20005), "twenty thousand five");
console.log(
    numberToEnglish(99999),
    "ninety nine thousand nine hundred ninety nine"
);
console.log(numberToEnglish(95.99), "");
console.log(numberToEnglish(-4), "");
