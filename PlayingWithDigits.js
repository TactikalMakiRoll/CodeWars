function digPow(n, p) {
    let digits = String(n).split("");
    let digitsSum = 0;
    for (let i = 0; i < digits.length; i++) {
        digitsSum += digits[i] ** p++;
    }
    return digitsSum % n === 0 ? digitsSum / n : -1;
}