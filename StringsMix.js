//https://www.codewars.com/kata/5629db57620258aa9d000014/javascript

// count each letter appearance in a string and put it into map
function countLetters(letterMap, str) {
    for (let i = str.length - 1; i >= 0; i--) {
        let amount = str.match(new RegExp(`${str[i]}`, "g")).length;
        if (amount > 1) {
            letterMap.set(str[i], amount);
        }
        i -= amount - 1;
    }
}

function SortByLetterCount(a, b) {
    return b.split(":")[1].length - a.split(":")[1].length;
}

function SortByLetter(a, b) {
    if (b.split(":")[1].length === a.split(":")[1].length)
        return a.charCodeAt(2) - b.charCodeAt(2);
    else return 0;
}

function mix(s1, s2) {
    //normalize strings and sort for counting
    let s1counter = s1
        .replace(/[^a-z]/g, "")
        .split("")
        .sort()
        .join("");
    let s2counter = s2
        .replace(/[^a-z]/g, "")
        .split("")
        .sort()
        .join("");

    let s1Letters = new Map();
    let s2Letters = new Map();

    countLetters(s1Letters, s1counter);
    countLetters(s2Letters, s2counter);

    s1Letters = new Map(
        [...s1Letters.entries()].sort((a, b) => {
            return b[1] - a[1];
        })
    );
    s2Letters = new Map(
        [...s2Letters.entries()].sort((a, b) => {
            return b[1] - a[1];
        })
    );

    let result = "";
    let resultObj = {};

    for (let [key, value] of s1Letters) {
        let letterCountInSecond = s2Letters.get(key);
        s1Letters.delete(key);
        if (letterCountInSecond) {
            s2Letters.delete(key);
            if (letterCountInSecond > value) {
                key = "2:" + key;
                value = letterCountInSecond;
            } else if (letterCountInSecond < value) {
                key = "1:" + key;
            } else if (letterCountInSecond === value) {
                key = "=:" + key;
            }
        } else {
            key = "1:" + key;
        }
        resultObj[key] = value;
    }

    for (let [key, value] of s2Letters) {
        resultObj["2:" + key] = value;
    }

    // i was kind of lost on how to sort so decided to just get the thing done in any available way
    let resultArray = [];
    let resultSecond = [];
    let resultEqual = [];

    for (let [key, value] of Object.entries(resultObj)) {
        resultArray.push(key + key[2].repeat(value - 1) + "/");
    }

    resultArray.sort(SortByLetterCount);
    // console.log(resultArray);
    resultArray.sort(SortByLetter);
    // console.log(resultArray);

    result = resultArray.join("");

    return result;
}

console.log(
    mix("Are they here", "yes, they are here"),
    "2:eeeee/2:yy/=:hh/=:rr"
);
console.log(
    mix("looping is fun but dangerous", "less dangerous than coding"),
    "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
);
console.log(
    mix(" In many languages", " there's a pair of functions"),
    "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
);
console.log(mix("Lords of the Fallen", "gamekult"), "1:ee/1:ll/1:oo");
