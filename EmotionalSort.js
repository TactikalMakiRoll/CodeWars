function sortEmotions(arr, order) {
    if (arr.length === 0) {
        return [];
    }

    let emotionCode = {
        ":D": 0,
        ":)": 1,
        ":|": 2,
        ":(": 3,
        T_T: 4,
    };
    function convertToNumbers(emotions) {
        return emotions.map((elem) => emotionCode[elem]);
    }
    arr = convertToNumbers(arr);
    order ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    function convertToEmojis(emotions) {
        return emotions.map((elem) => {
            return Object.keys(emotionCode)[elem];
        });
    }
    arr = convertToEmojis(arr);

    return arr;
}
console.log(sortEmotions([":D", "T_T", ":D", ":("], true), [
    ":D",
    ":D",
    ":(",
    "T_T",
]);
console.log(sortEmotions(["T_T", ":D", ":(", ":("], true), [
    ":D",
    ":(",
    ":(",
    "T_T",
]);
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], true), [
    ":D",
    ":D",
    ":)",
    ":)",
    "T_T",
]);
console.log(sortEmotions([":D", "T_T", ":D", ":("], false), [
    "T_T",
    ":(",
    ":D",
    ":D",
]);
console.log(sortEmotions(["T_T", ":D", ":(", ":("], false), [
    "T_T",
    ":(",
    ":(",
    ":D",
]);
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], false), [
    "T_T",
    ":)",
    ":)",
    ":D",
    ":D",
]);
console.log(sortEmotions([], false), []);
console.log(sortEmotions([], true), []);
