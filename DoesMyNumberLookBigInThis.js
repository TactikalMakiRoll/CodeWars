function narcissistic(value) {
    let initialValue = value;
    let power = (value + "").length;
    let digitSum = 0;
    while (value > 0) {
        digitSum += Math.pow(value % 10, power);
        value = Math.floor(value / 10);
    }
    return digitSum === initialValue;
}

console.log(narcissistic(7), true);
console.log(narcissistic(153), true);
console.log(narcissistic(122), false);
console.log(narcissistic(487), false);
