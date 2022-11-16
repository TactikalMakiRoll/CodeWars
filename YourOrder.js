function order(words){
    if(words===""){
        return "";
    }
    let sentence = words.split(" ");

    let result = [];
    for(let i=1;i<sentence.length+1;i++){
        result[i] = i;
    }
    result.shift();

    for(let i=0;i<sentence.length;i++){
        for(let j = 0;j<result.length;j++){
            if(sentence[i].includes(result[j])){
                result[j] = sentence[i];
                break;
            }
        }
    }
    return result.join(" ");
}

function order2(words){
    let sentence = words.split(" ");
    let result = [];

    sentence.forEach(word => {
        let pos = word.replace(/\D+/g, '');
        result[pos] = word;
    });

    result.shift();
    return result.join(" ");
}

console.log(order2("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
console.log(order2("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
console.log(order2(""), "", "empty input should return empty string" );