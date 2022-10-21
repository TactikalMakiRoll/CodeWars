let uniqueInOrder=function(iterable){
    if(typeof iterable === 'string'){
      iterable = iterable.split('');
    }
    if(iterable.length === 0){
        return [];
    }
    let result = [];
    let resi = 0;
    result.push(iterable[0]);
    for(let i=1;i<iterable.length;i++){
        if(iterable[i] === result[resi]){
            continue;
        }
        else{
            result.push(iterable[i]);
            resi++;
        }
    }
    return result;
}

let uniquiInOrderSmart = function(iterable){
    return [...iterable].filter((elem, index)=> elem!==iterable[index-1]);
}
