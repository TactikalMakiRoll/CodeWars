function tribonacci(signature,n){
    //your code here
    let result = [];
    if(n===0){
        return result;
    }
    if(n<=3){
        return signature.slice(0,n);
    }
    result.push(...signature);
    while(n>3){
        result.push(result[result.length-1] +
                    result[result.length-2] +
                    result[result.length-3])
        n--;
    }
    return result;
}

  
console.log(tribonacci([1,1,1], 10), [1,1,1,3,5,9,17,31,57,105])
console.log(tribonacci([1,1,1], 1), [1])